"use client"

import { motion } from "framer-motion";

export default function PropertiesHero() {
    return (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[40vh] bg-neutral-900 flex items-center justify-center text-center"
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <h1 className="relative text-white text-4xl md:text-6xl font-semibold tracking-wide">
            Naša ponuda stanova
          </h1>
        </motion.section>
    )
}