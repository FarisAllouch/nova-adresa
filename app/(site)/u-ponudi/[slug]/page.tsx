import Details from "../../../../components/details";
import { getStan } from "@/sanity/lib/queries";

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    
    const stan = await getStan(slug);
    console.log("STAN DATA:", JSON.stringify(stan));

    if (!stan) { 
        return (
            <div className="p-20 text-center">
                <h1 className="text-3xl font-bold">Stan nije pronađen</h1>
            </div>
        );
    }

    return <Details stan={stan} />;
}