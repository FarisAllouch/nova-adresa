import PropertiesHero from "./propertieshero";
import PropertyCard from "./propertycard";

export default function Project({title, projects = [], status, id}: {title: string, projects: any[], status: any, id: string}) {
    return (
        <section id={id} className="scroll-mt-32 bg-gray-100">
            <PropertiesHero title={title}/>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 py-20 max-w-7xl mx-auto">
                {projects.map((project: any) => (
                <PropertyCard key={project.slug.current} status={status} stan={project} />
                ))}
            </section>
        </section>
    );
}