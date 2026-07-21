import TechnologyCard from "./TechnologyCard";
import { technologies } from "../../data/technologies";
import { motion } from "framer-motion";

export default function Technologies() {
    return (
        <motion.section 
            id="technologies"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-6 md:px-12 xl:px-24 py-24"
        >
            <div className="max-w-360 mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-12 items-start">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="uppercase text-lg font-semibold tracking-wider text-green-title">
                            Tecnologías
                        </span>

                        <h2 className="mt-4 text-5xl leading-[1.08] font-bold text-principal-text">
                            Herramientas
                            <br />
                            que uso
                        </h2>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5"
                    >
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}