import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import { fetchProducts, type ApiProduct } from "../api/products.api";
import ProductCard from "../components/ProductCard";

type Status = "loading" | "success" | "error";

function ProductsPage() {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      setStatus("loading");
      try {
        const result = await fetchProducts();
        if (cancelled) return;
        setProducts(result);
        setStatus("success");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    loadProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return <p className="text-center my-4">Загрузка...</p>;
  }

  if (status === "error") {
    return (
      <section className="max-w-[1100px] mx-auto my-4 px-4">
        <Alert severity="error">Ошибка получения данных</Alert>
      </section>
    );
  }

  return (
    <section className="flex flex-wrap justify-center gap-5 max-w-[1100px] mx-auto my-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductsPage;