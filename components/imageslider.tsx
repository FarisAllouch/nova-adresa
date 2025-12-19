"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageSlider() {

    const [index, setIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const slides = ["/a_1.jpg", "/a_2.jpg", "/a_4.jpg"];

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="w-full relative overflow-hidden">
            <div className="relative w-full h-[60vh] md:h-[80vh]">
                <div
                className="flex h-full w-full transition-transform duration-700 cursor-pointer"
                style={{ transform: `translateX(-${index * 100}%)` }}
                onClick={nextSlide}
                onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
                onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
                onTouchEnd={() => {
                    if (touchStart - touchEnd > 50) nextSlide();
                    if (touchEnd - touchStart > 50) prevSlide(); 
                }}
                >
                {slides.map((src, i) => (
                    <div key={i} className="min-w-full h-full relative">
                    <Image
                        src={src}
                        alt={`Slide ${i}`}
                        fill
                        className="object-cover"
                        priority={i === 0}
                    />
                    </div>
                ))}
                </div>

                <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold bg-black/30 px-3 py-1 rounded"
                >
                ‹
                </button>

                <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold bg-black/30 px-3 py-1 rounded"
                >
                ›
                </button>
            </div>
        </section>
    )
}