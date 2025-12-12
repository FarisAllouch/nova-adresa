"use client"

import { motion } from "framer-motion";

export default function PropertiesFilters() {
    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.select
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 border rounded-md bg-white shadow-sm"
            >
              <option>Tip stana</option>
              <option>Jednosoban</option>
              <option>Dvosoban</option>
              <option>Trosoban</option>
            </motion.select>

            <motion.select
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 border rounded-md bg-white shadow-sm"
            >
              <option>Kvadratura</option>
              <option>40–60 m²</option>
              <option>60–80 m²</option>
              <option>80–100 m²</option>
            </motion.select>

            <motion.select
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 border rounded-md bg-white shadow-sm"
            >
              <option>Cijena</option>
              <option>150,000 KM – 200,000 KM</option>
              <option>200,000 KM – 250,000 KM</option>
              <option>250,000 KM+</option>
            </motion.select>
          </motion.div>
        </section>
    )
}