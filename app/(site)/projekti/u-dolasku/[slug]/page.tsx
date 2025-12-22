import { getProject } from "@/sanity/lib/queries";
import ProjectDetails from "@/components/projectDetails";

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const project = await getProject(slug);

    console.log("PROJECT DATA:", JSON.stringify(project));

    if (!project) {
        return (
        <div className="py-40 text-center text-3xl font-semibold">
            Projekat nije pronađen
        </div>
        );
    }

    return <ProjectDetails project={project}/>
}