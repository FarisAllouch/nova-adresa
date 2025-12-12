"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  open: boolean;
  onClose: () => void;
};

export default function GalleryModal({ images, open, onClose }: Props) {
    if (!open) return null;

    const [index, setIndex] = useState(0);  
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const next = () => setIndex((prev) => (prev + 1) % images.length);

    const prev = () =>
        setIndex((prev) => (prev - 1 + images.length) % images.length);

    useEffect(() => {
        
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart) return;
        const diff = e.changedTouches[0].clientX - touchStart;

        if (diff > 80) prev();
        if (diff < -80) next();

        setTouchStart(null);
    };

     return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-[9999] flex items-center justify-center p-5">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white text-4xl"
            >
                ✕
            </button>

            <button
                onClick={prev}
                className="absolute left-4 text-white text-4xl select-none px-3 py-1"
            >
                ‹
            </button>

            <button
                onClick={next}
                className="absolute right-4 text-white text-4xl select-none px-3 py-1"
            >
                ›
            </button>

            <div
                className="relative w-full max-w-4xl h-[70vh]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <Image
                src={images[index]}
                alt="galerija"
                fill
                className="object-contain select-none"
                />
            </div>

            <div className="absolute bottom-6 flex gap-2">
                {images.map((_, i) => (
                <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${
                    i === index ? "bg-white" : "bg-white/40"
                    }`}
                />
                ))}
            </div>
        </div>
    );
}