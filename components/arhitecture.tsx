import { useInView } from "react-intersection-observer";
import useCountUp from "@/hooks/useCountUp";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Arhitecture() {
    const { ref: statsRef, inView: statsVisible } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const squares = useCountUp(statsVisible ? 30000 : 0);
    const flats = useCountUp(statsVisible ? 900 : 0);
    const experience = useCountUp(statsVisible ? 20 : 0);
    const buildings = useCountUp(statsVisible ? 10 : 0);

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
                    <h2 className="relative text-4xl mb-5 md:text-7xl font-medium tracking-wide text-neutral-900
                        before:content-[''] before:block before:h-[15px] before:bg-[#9f9160] before:mb-4 before:w-full"
                    >
                        Moderna <br /> arhitektura
                    </h2>

                    <p className="max-w-xl text-neutral-600 sm:ml-5 text-lg leading-relaxed">
                        Naši prostori dizajnirani su s jasnom vizijom - spoj funkcionalnosti, elegancije i savremene estetike.
                        Svaki detalj je promišljeno oblikovan kako bi stvorio harmoniju između prirodnog svjetla, otvorenih površina i vrhunskih materijala.
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
                                className="flex flex-col items-center text-center" 
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
                                <p className="text-neutral-600 leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </motion.div>

                <motion.div
                    ref={statsRef}
                    initial="hidden"
                    animate={statsVisible ? "visible" : "hidden"}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-10 md:mt-20 text-[#9f9160]"
                >
                    {[ 
                        { value: squares, label: "m2 izgrađenih" },
                        { value: flats, label: "izgrađenih stanova" },
                        { value: experience, label: "godina iskustva" },
                        { value: buildings, label: "realizovanih građevinskih projekata" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold">
                                {item.value}
                            </h3>
                            <p className="text-neutral-600 mt-2">{item.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
