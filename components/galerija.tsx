"use client";

import Image from "next/image";
import { useState } from "react";

export default function Galerija({galerija}: any) {
    const [active, setActive] = useState<string | null>(null);
    
    return (
        <main className="w-full">

            {/* HERO */}
            <section className="relative h-[60vh]">
                <Image
                src="/galerija_hero.jpeg"
                alt="Galerija"
                fill
                className="object-cover object-[50%_60%]"
                priority
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Galerija
                        </h1>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
                        Pregled arhitekture, enterijera i detalja naših projekata
                        </p>
                    </div>
                </div>
            </section>

            {/* GRID */}
            <section className="max-w-7xl mx-auto py-24 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {galerija.map((src: any, i: any) => (
                    <div
                    key={i}
                    className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
                    onClick={() => setActive(src)}
                    >
                    <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                    </div>
                ))}
                </div>
            </section>

            {/* MODAL */}
            {active && (
                <div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
                onClick={() => setActive(null)}
                >
                <div className="relative w-full max-w-6xl h-[80vh]">
                    <Image
                    src={active}
                    alt=""
                    fill
                    className="object-contain"
                    />
                </div>
                </div>
            )}

        </main>
    )
}