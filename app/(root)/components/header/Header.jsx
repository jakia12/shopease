"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import TopNav from "../topNav/TopNav";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const navItems = [
    { label: "Home", href: "#home", className: "text-gray-700" },
    { label: "About", href: "#services", className: "text-[#EE263D]" },
    { label: "Event Booking", href: "#about", className: "text-gray-700" },
  ];

  return (
    <header className="w-full  ">
      {/* Top Nav Bar */}
      <div className=" bg-[#171717]">
        <TopNav />
      </div>

      {/* Main Header */}
      <div className=" bg-white">
        <div className="max-w-[90%] w-[95%] mx-auto flex items-center justify-between p-4 md:px-8">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`${item.className} hover:text-blue-600 font-[20px] font-poppins transition`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="ml-4 bg-[#171717] text-[#F8DA55] px-4 py-[10px] rounded-lg font-poppins hover:bg-[#222] transition"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-700"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100 font-poppins"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block px-6 py-3 text-blue-600 font-semibold hover:bg-blue-50 font-poppins"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
