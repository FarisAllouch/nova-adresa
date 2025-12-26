"use client";

import { useState } from "react";
import PropertyCard from "@/components/propertycard";
import Image from "next/image";
import GalleryModal from "@/components/gallerymodal";
import PropertyMap from "@/components/propertyMap";

type ProjectDetailsProps = {
  project: any;
};

export default function ProjectDetails({project}: ProjectDetailsProps) {
    console.log("Stanovi", project.stanovi)
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="max-w-7xl mx-auto py-12 px-5">
            <div
                className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setOpen(true)}   
            >
                <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        {project.title}
                    </h1>
                    <p className="text-neutral-200 text-lg mt-2">
                        {project.locationName}
                    </p>
                </div>
            </div>

            {project.gallery && (
                <GalleryModal
                    images={project.gallery}
                    open={open}
                    onClose={() => setOpen(false)}
                />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
                <div className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-lg p-6 rounded-xl">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        Lokacija
                    </h3>
                    <p className="text-neutral-700 text-lg mt-1">
                        {project.locationName}
                    </p>
                </div>
            </div>

            <PropertyMap location={project.location} />

            {project.description && (
            <div className="mt-14 bg-white p-10 md:p-14 rounded-2xl shadow-lg 
                            max-w-5xl mx-auto
                            text-neutral-700 text-lg leading-8">
                <h2 className="text-3xl font-bold mb-6 text-neutral-900">
                O projektu
                </h2>

                <p className={`whitespace-pre-line ${!expanded ? "line-clamp-5" : ""}`}>
                {project.description}
                </p>

                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-4 text-lg font-semibold text-[#faaa31] hover:underline"
                >
                    {expanded ? "Prikaži manje" : "Prikaži više"}
                </button>
            </div>
            )}

            {project.youtubeUrl && (
                <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Video prezentacija
                    </h2>

                    <div className="aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                            src={project.youtubeUrl}
                            className="w-full h-full"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}

            {project.stanovi?.length > 0 && (
                <section className="mt-28">
                    <h2 className="text-4xl font-bold text-center mb-14">
                        Nekretnine
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {project.stanovi.map((stan: any) => (
                            <PropertyCard
                                status="u-ponudi"
                                key={stan.slug.current}
                                stan={stan}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}