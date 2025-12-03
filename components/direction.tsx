import Image from "next/image";

export default function Direction() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* RED: Naslov + Paragraf */}
                <div className="flex flex-col md:mb-18  mt-15 md:flex-row justify-between items-start">
                
                <h2 className="relative text-4xl mb-5 md:text-7xl font-medium tracking-wide text-neutral-900
                before:content-[''] before:block before:h-[15px] before:bg-[#9f9160] before:mb-4 before:w-full">
                    Moderna <br /> arhitektura
                </h2>

                <p className="max-w-xl text-neutral-600 text-lg leading-relaxed">
                    Ovdje možeš staviti bilo kakav opis koji želiš. Ovo je primjer, ti ga
                    kasnije zamijeniš. Sekcija je potpuno responsivna i čista.
                </p>

                </div>

                <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 gap-md-50 mt-20 mb-20">

                    <div>
                    <Image
                        src="/diamond.png"
                        width={100}
                        height={100}
                        alt="Building Quality" 
                        className=" mb-4 w-12 h-12"
                    />
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Building Quality</h3>
                    <p className="text-neutral-600 leading-relaxed">
                        Kratki opis o kvaliteti gradnje.
                    </p>
                    </div>

                    <div>
                    <Image
                        src="/diamond.png"
                        width={100}
                        height={100}
                        alt="Building Quality" 
                        className="mb-4 w-12 h-12"
                    />
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Modern Design</h3>
                    <p className="text-neutral-600 leading-relaxed">
                        Nešto o modernom dizajnu objekta.
                    </p>
                    </div>

                    <div>
                    <Image
                        src="/diamond.png"
                        width={100}
                        height={100}
                        alt="Building Quality" 
                        className=" mb-4 w-12 h-12"
                    />
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Premium Location</h3>
                    <p className="text-neutral-600 leading-relaxed">
                        Prednosti lokacije ili drugo.
                    </p>
                    </div>

                </div>
                </div>

                {/* RED: Statistike (4 kolone) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:mt-20 text-[#9f9160]">

                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">5</h3>
                    <p className="text-neutral-600 mt-2">m² of living space</p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">5061</h3>
                    <p className="text-neutral-600 mt-2">m² of green areas</p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">5200</h3>
                    <p className="text-neutral-600 mt-2">parking spots</p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">300</h3>
                    <p className="text-neutral-600 mt-2">additional units</p>
                </div>

                </div>

            </div>
        </section>
    )
}