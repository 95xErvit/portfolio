import { FiArrowUpRight } from "react-icons/fi";
import FeatureCard from "../AboutMe/FeaturedCard";
import { features } from "../../data/features";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <motion.section
            id="about-me"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-6 md:px-12 xl:px-24 py-24"
        >
            <div className="max-w-360 mx-auto rounded-[42px] bg-gray-card px-8 md:px-12 xl:px-16 py-16">
                <div className="grid grid-cols-1 xl:grid-cols-[430px_1fr] gap-20">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="uppercase text-lg font-semibold tracking-wider text-green-title">
                            Mi enfoque
                        </span>

                        <h2 className="mt-5 text-5xl leading-[1.08] font-bold text-principal-text">
                            Diseño.
                            <br />
                            Desarrollo.
                            <br />
                            Producto.
                        </h2>

                        <p className="mt-8 text-lg leading-9 text-[#6B7280]">
                            Me enfoco en crear soluciones digitales
                            escalables, accesibles y centradas en el usuario.
                            Desde la idea hasta el producto final.
                        </p>

                        {/* <button className="mt-10 h-14 px-8 rounded-full bg-white text-principal-text font-semibold flex items-center gap-3 shadow-[0_12px_30px_rgba(0,0,0,.05)] transition-all duration-300 hover:scale-105">
                            Más sobre mí

                            <FiArrowUpRight />
                        </button> */}
                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.15 }} 
                        className="grid md:grid-cols-2 gap-x-16 gap-y-14"
                    >
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.id}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}