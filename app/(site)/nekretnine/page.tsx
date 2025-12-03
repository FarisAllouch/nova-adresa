import Image from "next/image";
import Link from "next/link";

export default function PropertiesPage() {
  return (
    <div className="min-h-[calc(100vh-80px)]">

      <section className="relative w-full h-[40vh] bg-neutral-900 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="relative text-white text-4xl md:text-6xl font-semibold tracking-wide">
          Naša ponuda stanova
        </h1>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className= "flex flex-wrap gap-4 justify-center">
          <select className="px-4 py-2 border rounded-md bg-white shadow-sm">
            <option>Tip stana</option>
            <option>Jednosoban</option>
            <option>Dvosoban</option>
            <option>Trosoban</option>
          </select>

          <select className="px-4 py-2 border rounded-md bg-white shadow-sm">
            <option>Kvadratura</option>
            <option>40–60 m²</option>
            <option>60–80 m²</option>
            <option>80–100 m²</option>
          </select>

          <select className="px-4 py-2 border rounded-md bg-white shadow-sm">
            <option>Cijena</option>
            <option>150,000 KM – 200,000 KM</option>
            <option>200,000 KM – 250,000 KM</option>
            <option>250,000 KM+</option>
          </select>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer">
            <div className="relative w-full h-64">
              <Image
                src="/test.jpg"
                alt="Stan"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-[#9f9160] font-semibold text-lg">3300 KM/m²</p>

              <h3 className="text-2xl font-semibold mt-2">Trosoban stan – 83 m²</h3>
              <p className="text-neutral-600 mt-1">Dobrinja, Sarajevo</p>

              <Link
                href="/nekretnine/stan-83m2"
                className="inline-block mt-5 px-5 py-2 bg-[#9f9160] text-white rounded-md shadow hover:bg-[#8a7d4f] transition"
              >
                Detaljnije
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer">
            <div className="relative w-full h-64">
              <Image
                src="/test.jpg"
                alt="Stan"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-[#9f9160] font-semibold text-lg">3300 KM/m²</p>

              <h3 className="text-2xl font-semibold mt-2">Trosoban stan – 83 m²</h3>
              <p className="text-neutral-600 mt-1">Dobrinja, Sarajevo</p>

              <Link
                href="/nekretnine/stan-83m2"
                className="inline-block mt-5 px-5 py-2 bg-[#9f9160] text-white rounded-md shadow hover:bg-[#8a7d4f] transition"
              >
                Detaljnije
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer">
            <div className="relative w-full h-64">
              <Image
                src="/test.jpg"
                alt="Stan"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-[#9f9160] font-semibold text-lg">3300 KM/m²</p>

              <h3 className="text-2xl font-semibold mt-2">Trosoban stan – 83 m²</h3>
              <p className="text-neutral-600 mt-1">Dobrinja, Sarajevo</p>

              <Link
                href="/nekretnine/stan-83m2"
                className="inline-block mt-5 px-5 py-2 bg-[#9f9160] text-white rounded-md shadow hover:bg-[#8a7d4f] transition"
              >
                Detaljnije
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer">
            <div className="relative w-full h-64">
              <Image
                src="/test.jpg"
                alt="Stan"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-[#9f9160] font-semibold text-lg">3300 KM/m²</p>

              <h3 className="text-2xl font-semibold mt-2">Trosoban stan – 83 m²</h3>
              <p className="text-neutral-600 mt-1">Dobrinja, Sarajevo</p>

              <Link
                href="/nekretnine/stan-83m2"
                className="inline-block mt-5 px-5 py-2 bg-[#9f9160] text-white rounded-md shadow hover:bg-[#8a7d4f] transition"
              >
                Detaljnije
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
