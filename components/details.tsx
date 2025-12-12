"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "@/components/gallerymodal";
import { urlFor } from "@/sanity/lib/image";

export default function Details({ stan }: { stan: any }) {
  console.log("gallery data:", stan.gallery);
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto py-12 px-5">

      {/* HERO */}
      <div
        className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
        onClick={(e) => {
          setOpen(true);
        }}
      >
        <Image
          src={urlFor(stan.mainImage).width(1600).url()}
          alt={stan.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute bottom-5 left-5 text-white">
          <h1 className="text-4xl font-bold drop-shadow-lg">{stan.title}</h1>
          <p className="text-[#f3c623] text-2xl font-bold mt-1">{stan.price}</p>
          <p className="text-neutral-200">{stan.location}</p>
      </div>
      </div>

      <GalleryModal
        images={stan.gallery}
        open={open}
        onClose={() => setOpen(false)}
      />

      {/* DETALJI */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
      
        {/* Kocka 1 */}
        <div className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-lg p-6 rounded-xl">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9f9160]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 5a2 2 0 0 1 2-2h3v2H5v14h3v2H5a2 2 0 0 1-2-2V5zm16-2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3v-2h3V5h-3V3h3zM9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/>
            </svg>
            Kvadratura
          </h3>
          <p className="text-neutral-700 text-lg mt-1">{stan.size}</p>
        </div>

        {/* Kocka 2 */}
        <div className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-lg p-6 rounded-xl">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9f9160]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5z" />
            </svg>
            Lokacija
          </h3>
          <p className="text-neutral-700 text-lg mt-1">{stan.location}</p>
        </div>

        {/* Kocka 3 */}
        <div className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-lg p-6 rounded-xl">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9f9160]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1a9 9 0 0 0-9 9c0 7 9 13 9 13s9-6 9-13a9 9 0 0 0-9-9zm1 14.93V17h-2v-1.07a4.002 4.002 0 0 1-3-3.87h2a2 2 0 1 0 2-2h-1a1 1 0 0 1 0-2h2a4 4 0 0 1 0 7.87z" />
            </svg>
            Cijena
          </h3>
          <p className="text-neutral-700 text-lg mt-1 font-semibold">{stan.price}</p>
        </div>

      </div>

      {/* OPIS */}
      <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg leading-relaxed text-neutral-700">
        <h2 className="text-2xl font-bold mb-3">Opis nekretnine</h2>
        <p>{stan.description}</p>
      </div>

      {/* CTA */}
      <div className="mt-16 p-10 bg-neutral-900 rounded-2xl text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Zainteresovani za nekretninu?</h2>
        <p className="text-neutral-300 mb-6">Kontaktirajte nas za više informacija ili obilazak.</p>

        <a
          href="tel:+38761907248"
          className="px-8 py-3 bg-[#f3c623] rounded-lg text-neutral-900 font-semibold hover:bg-[#d9ad1f] transition-all duration-300 inline-block"
        >
          Pozovi odmah
        </a>
      </div>

    </div>
  );
} 