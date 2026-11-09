export type ApiReview = {
  rating: number;
  comment: string;
  date: string;      // ISO
  reviewerName: string;
  reviewerEmail: string;
};

export type ApiProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ApiReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode?: string;
  };
  images: string[];
  thumbnail: string;
};
 
type ProductsResponse = { products: ApiProduct[] };
 
async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return (await response.json()) as T;
}
 
export async function fetchProducts() {
  const data = await getJson<ProductsResponse>("https://dummyjson.com/products");
  return data.products;
}
 
export function fetchProduct(id: string) {
  return getJson<ApiProduct>(`https://dummyjson.com/products/${id}`);
}