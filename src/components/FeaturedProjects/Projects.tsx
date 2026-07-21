import ProjectCard from "./ProjectCard";
import { projects } from "../../data/project";
import { motion } from "framer-motion";

export default function Projects() {

    const headerVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1] as any,
            },
        },
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.18,
            },
        },
    };

    return (
        <motion.section 
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="px-6 md:px-12 xl:px-24 py-24"
        >
            <div className="max-w-360 mx-auto">

                {/* HEADER */}
                <motion.div 
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-5xl"
                >
                    <span className="uppercase text-lg font-semibold tracking-wider text-green-title">
                        Mis Proyectos
                    </span>

                    <h3 className="mt-5 text-5xl leading-[1.08] font-bold text-principal-text">
                        Proyectos en los que he colaborado en el diseño, desarrollo y producto.
                    </h3>
                </motion.div>

                {/* GRID */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            index={index}
                            {...project}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}