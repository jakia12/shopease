import EventSchedule from "./(root)/components/eventSchedule/EventSchedule";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const slicedProd = products.slice(0, 8);

  return (
    <>
      <EventSchedule />
    </>
  );
}
