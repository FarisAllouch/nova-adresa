import { useState } from "react";
import ContactTitle from "./contact-title";

export default function Contact() {
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
        className="relative w-full min-h-[80vh] bg-cover bg-center py-24"
        style={{ backgroundImage: 'url("/kontakt-slika.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <ContactTitle/>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto">
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
                placeholder="example@email.com"
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
                className="w-full mt-2 px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none border border-white/30 focus:ring-2 focus:ring-[#f3c623] transition"
                placeholder="Vaša poruka..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-yellow-600 text-black font-semibold text-lg rounded-lg shadow-lg hover:bg-[#d9ad1f] hover:scale-[1.03] transition-all duration-300"
            >
              Pošalji poruku
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}