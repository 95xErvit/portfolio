import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiClock, FiArrowUpRight } from "react-icons/fi";

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
    url: string;
    index?: number;
};

export default function ProjectCard({title, description, image, url}: Props) {
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
                    className="w-full h-full object-cover"
                />
            </div>

            {/* CONTENT */}
            <div className="p-8">
                <h3 className="text-2xl md:text-[30px] font-semibold text-principal-text">
                    {title}
                </h3>

                <p 
                    className="my-4 text-[#6B7280] leading-8"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></p>

                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                >
                    <span
                        className="
                            flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-green text-principal-text font-semibold transition-all duration-300 cursor-pointer no-underline
                            hover:shadow-button hover:bg-green-hover
                            active:scale-[0.98] active:bg-green-active
                        "
                    >
                        Ver proyecto
                        
                        <div className="w-7 h-7 rounded-full border border-text-principal flex items-center justify-center">
                            <FiArrowUpRight size={14} />
                        </div>
                    </span>
                </a>
            </div>
        </motion.article>
    );
}