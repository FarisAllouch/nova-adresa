"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactTitle from "@/components/contact-title";
import { useState } from "react";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(true);
      e.target.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  }


  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center py-28"
      style={{ backgroundImage: 'url("/kontakt-slika.jpg")' }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <ContactTitle/>
        </motion.div>

        {/* CONTACT + FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 text-white h-fit"
          >
            <h3 className="text-2xl font-bold mb-6">Kontakt informacije</h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <MapPin size={28} className="text-[#f3c623]" />
                <p className="text-gray-200 text-lg leading-relaxed">
                  Mustafe Bajića, Sarajevo 71000
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={28} className="text-[#f3c623]" />
                <p className="text-gray-200 text-lg">+387 62 000 446</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={28} className="text-[#f3c623]" />
                <p className="text-gray-200 text-lg">
                  info@nova-adresa.com
                </p>
              </div>

            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8"
          >
            {success && (
              <div className="p-4 text-green-900 bg-green-200 border border-green-300 rounded-lg mb-4 animate-fade-in">
                Poruka je uspješno poslata!
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-white font-medium">Ime i prezime</label>
                <input
                  type="text"
                  name="name"
                  className="w-full mt-2 px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none border border-white/30 focus:ring-2 focus:ring-[#f3c623] transition"
                  placeholder="Vaše ime"
                />
              </div>

              <div>
                <label className="text-white font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full mt-2 px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none border border-white/30 focus:ring-2 focus:ring-[#f3c623] transition"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="text-white font-medium">Broj telefona</label>
                <input 
                  type="number"
                  name="phone"
                  className="w-full mt-2 px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none border border-white/30 focus:ring-2 focus:ring-[#f3c623] transition"
                  placeholder="Vaš broj telefona"
                />
              </div>

              <div>
                <label className="text-white font-medium">Poruka</label>
                <textarea
                  name="message"
                  className="w-full mt-2 px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none border border-white/30 focus:ring-2 focus:ring-[#f3c623] transition h-32 resize-none"
                  placeholder="Vaša poruka..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 bg-[#f3c623] text-black font-semibold text-lg rounded-lg shadow-lg hover:bg-[#d9ad1f] hover:scale-[1.03] transition-all duration-300"
              >
                Pošalji poruku
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}