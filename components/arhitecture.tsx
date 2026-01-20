"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Arhitecture() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col md:mb-18 mt-15 md:flex-row justify-between items-start"
                >
                    <h2
                    className="
                    relative
                    text-3xl sm:text-4xl md:text-7xl
                    mb-4 md:mb-5
                    font-medium tracking-wide
                    text-neutral-900
                    px-4 sm:px-0
                    before:content-['']
                    before:block
                    before:h-[12px] md:before:h-[15px]
                    before:bg-[#faaa31]
                    before:mb-3 md:before:mb-4
                    before:w-full
                    "
                    >
                    Moderna <br /> arhitektura
                    </h2>

                    <p
                    className="
                        max-w-xl
                        px-4 sm:px-0
                        text-base sm:text-lg md:text-xl
                        text-neutral-600
                        leading-relaxed
                        sm:ml-5
                    "
                    >
                    Naši prostori dizajnirani su s jasnom vizijom – spoj funkcionalnosti, elegancije i savremene estetike.
                    Svaki detalj je promišljeno oblikovan kako bi stvorio harmoniju između prirodnog svjetla,
                    otvorenih površina i vrhunskih materijala.
                    Rezultat je životni prostor koji izgleda moderno, djeluje prostrano i pruža osjećaj luksuza u svakom trenutku.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    className="flex"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 gap-md-50 mt-20 mb-20">

                        {[ 
                            { title: "Kvalitet Gradnje", text: "Objekat je izgrađen po visokim standardima, koristeći savremene materijale i tehnologije koje osiguravaju dugotrajnost, sigurnost i stabilnost konstrukcije." },
                            { title: "Moderan Dizajn", text: "Precizno oblikovan dizajn kombinuje eleganciju i praktičnost, stvarajući luksuzan ambijent s modernim arhitektonskim izražajem" },
                            { title: "Energetski Certifikat", text: "Naši objekti posjeduju važeći energetski certifikat koji garantuje optimalnu potrošnju energije, bolju izolaciju i niže troškove grijanja i hlađenja." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                whileHover={{ scale: 1.03 }}
                                className="flex flex-col items-center rounded-lg text-center bg-[#f9f9f9]" 
                            >
                                <Image
                                    src="/diamond.png"
                                    width={100}
                                    height={100}
                                    alt={item.title}
                                    className="mb-4 w-12 h-12"
                                />
                                <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-600 text-lg leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
