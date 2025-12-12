  import { getStanovi } from "@/sanity/lib/queries";
  import PropertiesFilters from "@/components/propertiesfilters";
  import PropertiesHero from "@/components/propertieshero";
  import PropertyCard from "@/components/propertycard";

  export default async function PropertiesPage() {
    const stanovi = await getStanovi();

    return (
      <div className="min-h-[calc(100vh-80px)]">

        {/* HERO */}
        <PropertiesHero/>

        {/* FILTERS */}
        <PropertiesFilters/>
        {/* CARD GRID */}

        <div className="min-h-[calc(100vh-80px)]">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 py-20 max-w-7xl mx-auto">
            {stanovi.map((stan: any) => (
              <PropertyCard key={stan.slug.current} stan={stan} />
            ))}
          </section>
        </div>
      </div>
    );
  }
