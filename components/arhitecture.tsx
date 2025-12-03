import { useInView } from "react-intersection-observer";
import useCountUp from "@/hooks/useCountUp";
import Image from "next/image";

export default function Arhitecture () {
    const { ref: statsRef, inView: statsVisible } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    
    const living = useCountUp(statsVisible ? 5 : 0);
    const green = useCountUp(statsVisible ? 5061 : 0);
    const parking = useCountUp(statsVisible ? 5200 : 0);
    const units = useCountUp(statsVisible ? 300 : 0);
    return (
            <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:mb-18  mt-15 md:flex-row justify-between items-start">
                
                <h2 className="relative text-4xl mb-5 md:text-7xl font-medium tracking-wide text-neutral-900
                before:content-[''] before:block before:h-[15px] before:bg-[#9f9160] before:mb-4 before:w-full">
                    Moderna <br /> arhitektura
                </h2>

                <p className="max-w-xl text-neutral-600 sm:ml-5 text-lg leading-relaxed">
                    Ovdje možeš staviti bilo kakav opis koji želiš. Ovo je primjer, ti ga
                    kasnije zamijeniš. Sekcija je potpuno responsivna i čista.
                    Ovdje možeš staviti bilo kakav opis koji želiš. Ovo je primjer, ti ga
                    
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

                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-10 md:mt-20 text-[#9f9160]">

                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">{living}</h3>
                    <p className="text-neutral-600 mt-2">m² of living space</p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">{green}</h3>
                    <p className="text-neutral-600 mt-2">m² of green areas</p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">{parking}</h3>
                    <p className="text-neutral-600 mt-2">parking spots</p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">{units}</h3>
                    <p className="text-neutral-600 mt-2">additional units</p>
                </div>

                </div>
    
            </div>
        </section>
    )
}