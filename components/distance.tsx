import Image from "next/image";

export default function Distance() {
    return (
        <section className="w-full py-10 bg-[#9f9160]">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-wrap justify-center gap-10 lg:gap-25">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                    <Image 
                        src="/tramvaj-stanica.png"
                        alt="Tramvaj"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                    </div>
                    <h3 className="text-3xl font-semibold">5 mins</h3>
                    <p className="mt-1 whitespace-nowrap">distance from the bus station</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                    <Image 
                        src="/bus-stanica.png"
                        alt="Tramvaj"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                    </div>
                    <h3 className="text-3xl font-semibold">10 mins</h3>
                    <p className="mt-1 whitespace-nowrap">distance from the tram station</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                    <Image 
                        src="/aerodrom-sarajevo.png"
                        alt="Tramvaj"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                    </div>
                    <h3 className="text-3xl font-semibold">5 mins</h3>
                    <p className="mt-1 whitespace-nowrap">distance from the tram station</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                    <Image 
                        src="/gradska-jezgra.png"
                        alt="Tramvaj"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                    </div>
                    <h3 className="text-3xl font-semibold">5 mins</h3>
                    <p className="mt-1 whitespace-nowrap">distance from ...</p>
                </div>
                </div>

            </div>
        </section>
    )
}