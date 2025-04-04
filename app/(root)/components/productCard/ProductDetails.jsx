import Image from "next/image";

const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="relative w-full h-[500px]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-white mt-2">{product.category}</p>
        <div className="text-xl text-green-600 font-semibold mt-4">
          ${product.price}
        </div>

        <div className="flex items-center mt-4">
          <span className="text-yellow-500 text-sm">
            ⭐ {product.rating?.rate || "4.5"}
          </span>
          <span className="ml-2 text-gray-500 text-sm">
            ({product.rating?.count} reviews)
          </span>
        </div>

        <p className="mt-6 text-white leading-relaxed">{product.description}</p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
            Add to Cart
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
