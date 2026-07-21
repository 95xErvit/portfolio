import { motion } from "framer-motion";

// Variantes para la animación de la tarjeta del proyecto
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 12,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1] as any,
        },
    },
};

// Definición de las propiedades que recibirá el componente ProjectCard
type Props = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    index?: number;
};

export default function ProjectCard({title, description, image, technologies,}: Props) {
    return (
        <motion.article
            variants={cardVariants}
            className="overflow-hidden rounded-4xl bg-white shadow-component duration-300 hover:-translate-y-2 hover:shadow-hover-component"
        >

            {/* IMAGE */}
            <div className="aspect-16/10 overflow-hidden bg-[#F4F4F4]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* CONTENT */}
            <div className="p-8">
                <h3 className="text-[30px] font-semibold text-principal-text">
                    {title}
                </h3>

                <p className="mt-4 text-[#6B7280] leading-8">
                    {description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="px-4 py-2 rounded-full bg-[#F5F5F5] text-sm font-medium text-[#5B5B5B]"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}