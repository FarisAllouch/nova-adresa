export default function Contact() {
    return (
        <section
            className="relative w-full min-h-[80vh] bg-cover bg-center py-24"
            style={{ backgroundImage: 'url("/kontakt-slika.jpg")' }}
        >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-5xl mx-auto px-6">

          <h2 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
            Kontaktirajte nas
          </h2>

          <p className="text-gray-200 text-center mt-3 text-lg drop-shadow">
            Tu smo da odgovorimo na sva vaša pitanja.
          </p>

          <div className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto">

            <form className="space-y-6">

              <div>
                <label className="text-white font-medium">Ime i prezime</label>
                <input 
                  type="text"
                  className="w-full mt-2 px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none border border-white/30 focus:ring-2 focus:ring-[#f3c623] transition"
                  placeholder="Vaše ime"
                />
              </div>

              <div>
                <label className="text-white font-medium">Email</label>
                <input 
                  type="email"
                  className="w-full mt-2 px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none border border-white/30 focus:ring-2 focus:ring-[#f3c623] transition"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="text-white font-medium">Broj telefona</label>
                <input 
                  type="number"
                  className="w-full mt-2 px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none border border-white/30 focus:ring-2 focus:ring-[#f3c623] transition"
                  placeholder="Vaš broj telefona"
                />
              </div>

              <div>
                <label className="text-white font-medium">Poruka</label>
                <textarea
                  className="w-full mt-2 px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg outline-none border border-white/30 focus:ring-2 focus:ring-[#f3c623] transition"
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

          </div>
        </div>
      </section>
    )
}