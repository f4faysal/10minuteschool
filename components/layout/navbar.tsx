"use client";

import React from "react";
import Link from "next/link";
import { Search, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoLanguageOutline } from "react-icons/io5";

export default function Navbar({ lang }: { lang: "en" | "bn" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: "Class 6-12", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Admission", href: "#" },
    { label: "Online Batch", href: "#" },
    { label: "English Centre", href: "#" },
    { label: "More", href: "#" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (language: "en" | "bn") => {
    const newPath = pathname.replace(`/${lang}`, `/${language}`);
    router.push(newPath);
  };

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="https://10minuteschool.com/images/logo.svg"
                alt="10 Minute School"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-2">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="কিসের কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                className="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Selector */}
            <button
              className="hidden sm:flex gap-0.5 items-center justify-center text-gray-700 hover:text-gray-900 px-2 py-1 text-sm font-medium rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => handleLanguageChange(lang === "en" ? "bn" : "en")}
            >
              <IoLanguageOutline /> <span>{lang === "en" ? "বাং" : "En"}</span>
            </button>

            {/* Phone Number */}
            <Link
              href="tel:16910"
              className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200 px-2 py-1 rounded-md bg-green-50 hover:bg-green-100"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">16910</span>
            </Link>

            {/* Login Button */}
            <Link
              href="/login"
              className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
            >
              লগ-ইন
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-700 hover:text-gray-900 p-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            {/* Mobile Search Bar */}
            <div className="px-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="সার্চ করুন..."
                  className="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <button
              className="flex w-full text-left px-3 py-3 text-base font-medium gap-1
              items-center text-gray-700 hover:text-gray-900 bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => handleLanguageChange(lang === "en" ? "bn" : "en")}
            >
              <IoLanguageOutline className="inline-block " />
              <span> {lang === "en" ? "বাং" : "En"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
