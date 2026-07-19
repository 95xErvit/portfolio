import ProjectCard from "./ProjectCard";
import { projects } from "../../data/project";

export default function Projects() {
    return (
        <section className="px-6 md:px-12 xl:px-24 py-24">
            <div className="max-w-360 mx-auto">

                {/* HEADER */}
                <div className="max-w-5xl">
                    <span className="uppercase text-lg font-semibold tracking-wider text-[#59B400]">
                        Mis Proyectos
                    </span>

                    <h3 className="mt-5 text-5xl leading-[1.08] font-bold text-principal-text">
                        Proyectos en los que he colaborado en el diseño, desarrollo y producto.
                    </h3>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}