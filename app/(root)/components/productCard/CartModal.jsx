import Image from "next/image";

// components/CartModal.js
export default function CartModal({ isOpen, onClose, product }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-30 transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // prevent closing on inner click
      >
        <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>
        {product && (
          <>
            <Image
              src={product.image}
              alt={product.title}
              className="h-32 mx-auto mb-4 object-contain"
              width={400}
              height={400}
            />
            <p className="font-semibold">{product.title}</p>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
          </>
        )}
        <button
          className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
