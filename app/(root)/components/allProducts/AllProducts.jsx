"use client";

import ProductCard from "../productCard/ProductCard";

const AllProducts = ({ products }) => {
  return (
    <section className="bg-[#802c6ebb]">
      <div className="container w-[80%]  mx-auto py-[90px]">
        <h1 className="text-4xl font-bold mb-9">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
