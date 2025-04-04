import ProductDetails from "../../components/productCard/ProductDetails";

export default async function SingleProductPage({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return <ProductDetails product={product} />;
}
