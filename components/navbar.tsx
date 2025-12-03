"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Početna", href: "/" },
    { name: "Nekretnine", href: "/nekretnine" },
    { name: "O nama", href: "/about" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}
    >
      <div className="w-9/10 mx-auto py-8 flex justify-between items-center">
        
        <Link href="/">
          <Image 
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="w-50 h-auto"
          />
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl text-gray-300 hover:text-yellow-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <XMarkIcon className="w-7 h-7 text-white" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden px-4 pb-4 overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col space-y-3">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl text-gray-200 py-2 border-b border-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
