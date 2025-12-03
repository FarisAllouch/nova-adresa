import Link from "next/link"

export default function Hero() {
    return (
    <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/bg-home.jpg")' }}
    >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
            
            <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl">
            Vaša nova adresa počinje ovdje.
            </h1>

            <p className="mt-4 text-[#f3c623] text-2xl md:text-3xl font-semibold drop-shadow-xl">
            Ekskluzivni stanovi — već od 3.300 KM/m²
            </p>

            <Link
            href="/nekretnine"
            className="mt-10 px-10 py-4 bg-[#f3c623] text-black text-lg md:text-xl font-medium rounded-md shadow-xl
                        hover:bg-[#d9ad1f] transition-all duration-300 hover:scale-105"
            >
            Pogledaj ponudu
            </Link>

        </div>
    </div>
    )
}