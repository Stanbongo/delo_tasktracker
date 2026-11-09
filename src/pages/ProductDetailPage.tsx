import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProduct, type ApiProduct } from "../api/products.api";
import ProductDetails from "../components/ProductDetails";
import Alert from "@mui/material/Alert";

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      setProduct(null);
      setError(null);
      setLoading(true);

      // Проверяем корректность ID
      if (!id || !/^\d+$/.test(id) || Number(id) <= 0) {
        setError("Неверный ID");
        setLoading(false);
        return;
      }

      try {
        const data = await fetchProduct(id);

        if (!data || !data.id) {
          setError("Товар не существует");
          return;
        }

        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error && err.message === "HTTP 404") {
          setError("Товар не существует");
        } else {
          setError("Ошибка получения данных");
        }
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return (
      <section className="max-w-[1100px] mx-auto my-4 px-4">
        <Alert severity="error">{error}</Alert>
      </section>
    );
  }

  if (!product) return null;

  return (
    <section className="max-w-[1100px] mx-auto my-4 px-4">
      <ProductDetails product={product} />
    </section>
  );
}

export default ProductDetailPage;
