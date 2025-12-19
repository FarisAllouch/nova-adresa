import PropertiesHero from "./propertieshero";
import PropertyCard from "./propertycard";

export default function Project({projects}: any) {
    return (
        <>
            <PropertiesHero />

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 py-20 max-w-7xl mx-auto">
                {projects.map((project: any) => (
                <PropertyCard key={project.slug.current} stan={project} />
                ))}
            </section>
        </>
    );
}