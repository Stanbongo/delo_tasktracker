import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router";
import { fetchProducts, type ApiProduct } from "../api/products.api";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const [products, setProducts] = useState<ApiProduct[]>([]);

  const loadProducts = async () => {
    const result = await fetchProducts();
    setProducts(result);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="flex flex-wrap justify-center gap-5 max-w-[1100px] mx-auto my-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
}

export default ProductsPage;
