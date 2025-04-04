"use client";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ShopEase
        </Link>

        {/* Desktop Menu */}
        <div className={`md:flex space-x-6 ${isMobile ? "hidden" : "flex"}`}>
          <Link
            href="/shop"
            className="hover:text-blue-600 text-[#333] text-[18px]"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 text-[#333] text-[18px]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 text-[#333] text-[18px]"
          >
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer text-black" />

          <FiShoppingCart className="w-5 h-5 cursor-pointer text-black" />

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && isMobile && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          <Link href="/shop" className="hover:text-blue-600">
            Shop
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
