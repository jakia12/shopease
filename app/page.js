import AllProducts from "./(root)/components/allProducts/AllProducts";
import Banner from "./(root)/components/banner/Banner";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const slicedProd = products.slice(0, 8);

  return (
    <>
      <Banner />
      <AllProducts products={slicedProd} />
    </>
  );
}
