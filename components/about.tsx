import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
      <div className="min-h-screen flex flex-col">

        {/* HERO */}
        <section className="relative w-full h-[60vh] bg-neutral-900 overflow-hidden">
          <Image
            src="/bg-about.jpg"
            alt="About Nova Adresa"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/60" />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative h-full flex flex-col items-center justify-center text-center text-white px-5"
          >
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl">
              O Nama
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl text-neutral-200">
              Nova Adresa je moderni pristup tržištu nekretnina — spoj kvaliteta,
              dizajna i savremene arhitekture.
            </p>
          </motion.div>
        </section>

        {/* WHO WE ARE */}
        <section className="max-w-6xl mx-auto px-5 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Ko smo mi?
              </h2>
              <p className="text-neutral-700 leading-relaxed text-lg">
                Fokusirani smo na kreiranje stambenih objekata koji pružaju
                maksimalnu udobnost, kvalitetnu gradnju i moderan dizajn.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed text-lg">
                Svaki naš projekat razvijamo s pažnjom i posvećenošću, prateći
                najnovije standarde u arhitekturi i konstrukciji.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/about-interior.jpg"
                alt="Interior"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* VALUES */}
        <section className="bg-neutral-100 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto px-5 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Naše Vrijednosti
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">

              {/* CARD */}
              {[ 
                {
                  title: "Kvalitet Gradnje",
                  text: "Koristimo provjerene materijale, savremene tehnologije i stroge standarde.",
                },
                {
                  title: "Moderan Dizajn",
                  text: "Elegantni enterijeri, otvoreni prostori i vrhunska estetika.",
                },
                {
                  title: "Profesionalni Tim",
                  text: "Arhitekti, inženjeri i dizajneri posvećeni perfektnim rezultatima.",
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
                >
                  <Image
                    src="/diamond.png"
                    width={60}
                    height={60}
                    alt={item.title}
                    className="mx-auto mb-5"
                  />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </section>


      </div>
    )
}