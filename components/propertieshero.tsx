"use client";

import { motion } from "framer-motion";

export default function PropertiesHero({title}: {title: string}) {
  return (
    <section className="relative w-full h-[15vh] overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-emerald-800" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 px-6 text-center"
      >
        <h1 className="text-white text-lg md:text-5xl font-semibold tracking-tight leading-tight">
          {title}
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto h-[2px] bg-[#faaa31]"
        />

        <p className="mt-1 text-white/80 max-w-2xl mx-auto">
          Pažljivo odabrane nekretnine na najboljim lokacijama
        </p>

      </motion.div>
    </section>
  );
}
