import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";

const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
        <div className="relative w-full h-64">
          <Image
            src={product.image}
            alt={product.title}
            className="object-contain p-4"
            fill
          />
        </div>
        <div className="p-4">
          <Link href={`/products/${product?.id}`}>
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {product.title}
            </h2>
          </Link>

          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-blue-600">
              ${product.price}
            </span>
            <span className="text-yellow-500 text-sm">
              ⭐ {product.rating?.rate || "4.5"}
            </span>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
      {/* Cart Modal */}
      <CartModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
