import Image from "next/image";

export default function Distance() {
    return (
        <section className="w-full py-10 bg-[#9f9160]">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-wrap justify-center">

                    {[
                        { icon: "/tramvaj-stanica.png", title: "Blizina javnog prevoza", text: "Objekti su pozicionirani u naseljima sa brzom i lakom povezanošću." },
                        { icon: "/bus-stanica.png", title: "Urbanistička dostupnost", text: "U blizini se nalaze osnovne usluge, trgovine i svakodnevne potrebe." },
                        { icon: "/aerodrom-sarajevo.png", title: "Dobro povezana saobraćajnica", text: "Lokacije omogućavaju jednostavan pristup glavnim cestama i čvorištima." },
                        { icon: "/gradska-jezgra.png", title: "Urbani centri", text: "Izabrane lokacije nude dobru povezanost sa gradskim sadržajima." }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="
                                flex flex-col items-center text-center p-4
                                w-full
                                md:w-1/2
                                lg:w-1/4"
                            >
                                <div className="mb-4">
                                    <Image 
                                        src={item.icon}
                                        alt={item.title}
                                        width={70}
                                        height={70}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="mt-1 text-sm">{item.text}</p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}
