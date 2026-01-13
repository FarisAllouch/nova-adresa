"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function PropertyCard({ stan, status }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.04 }}
      className="bg-white rounded-xl max-w overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative w-full h-64">
        <Image
          src={urlFor(stan.mainImage)
            .width(1200)
            .quality(85)
            .auto("format")
            .url()}
          alt={stan.title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover contrast-105 saturate-105"
          placeholder="blur"
          blurDataURL={urlFor(stan.mainImage).width(20).blur(20).url()}
          priority
        />
      </div>

      <div className="p-6">
        <p className="text-[#9f9160] font-semibold text-lg">{stan.fullprice}</p>
        <h3 className="text-lg font-semibold">{stan.title}</h3>  
        <p className="text-neutral-600">{stan.locationName}</p>

        <Link
          href={`/projekti/${status}/${stan.slug.current}`}
          className="inline-block mt-5 px-5 py-2 bg-[#faaa31] text-white rounded-md"
        >
          Detaljnije
        </Link>
      </div>
      </motion.div>
    );
}