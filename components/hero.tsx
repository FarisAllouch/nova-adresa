"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/bg-home.jpg")' }}
    >
      {/* DARK OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black"
      ></motion.div>

      {/* CONTENT */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-6">

        {/* Naslov */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl"
        >
          Vaša nova adresa počinje ovdje.
        </motion.h1>

        {/* Podnaslov */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="my-10 text-[#f3c623] text-2xl md:text-3xl font-semibold drop-shadow-xl"
        >
          Ekskluzivni stanovi — već od 3.300 KM/m²
        </motion.p>

        {/* Dugme */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link
            href="/nekretnine"
            className="mt-10 px-10 py-4 bg-[#f3c623] text-black text-lg md:text-xl font-medium rounded-md shadow-xl
                       hover:bg-[#d9ad1f] transition-all duration-300 hover:scale-105"
          >
            Pogledaj ponudu
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
}
