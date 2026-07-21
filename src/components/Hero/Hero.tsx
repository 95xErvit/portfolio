import React from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full min-h-[85vh] flex items-center px-6 md:px-12 xl:px-24 py-20"
        >
            <div className="w-full max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* LEFT */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-start"
                >

                    {/* Badge */}
                    <div className="mb-6 px-5 py-2 rounded-full bg-[#F3FFD8] border border-[#DDF5A8]">
                        <span className="text-[#59B400] text-sm font-semibold">
                            Hola, soy Erik 👋
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-[52px] md:text-[72px] leading-[1.05] font-bold text-principal-text max-w-175">
                        Desarrollo productos digitales que las personas disfrutan usar
                        <span className="text-green">.</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-135 text-[20px] leading-[1.8] text-[#6B7280]">
                        Frontend Developer especializado en React, Next.js,
                        Astro y experiencias digitales centradas en el usuario.
                    </p>

                    {/* Actions */}
                    <div className="mt-10 flex flex-wrap gap-5">
                        <a href="#projects" className="h-14 px-8 rounded-full bg-green text-principal-text font-semibold flex items-center gap-3 transition-all duration-300 hover:shadow-button hover:scale-105 hover:-translate-y-1 cursor-pointer no-underline">
                            <FiArrowRight size={18} />
                            Ver proyectos
                        </a>

                        <button className="h-14 px-8 rounded-full bg-white text-principal-text font-semibold border border-[#E7E3E1] flex items-center gap-3 transition-all duration-300 hover:shadow-button hover:-translate-y-1 cursor-pointer">
                            Descargar CV
                            <FiDownload size={18} />
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="relative flex justify-center items-center min-h-137.5"
                >

                    {/* Placeholder principal */}
                    <div className="w-full max-w-125 h-125 backdrop-blur-sm flex flex-col items-center justify-center">

                        <div className="w-28 h-28 rounded-full bg-[#F3FFD8] flex items-center justify-center mb-6">
                            <div className="w-14 h-14 rounded-full bg-green" />
                        </div>

                        <h3 className="text-2xl font-semibold text-principal-text">
                            Espacio para animación
                        </h3>

                        <p className="mt-4 max-w-75 text-center text-[#6B7280] leading-relaxed">
                            Aquí agregaré una animación Lottie, un modelo 3D,
                            un mockup o cualquier elemento visual principal.
                        </p>

                    </div>

                    {/* Badge flotante */}
                    <div className="absolute bottom-10 right-0 bg-white p-4 rounded-3xl shadow-lg border border-[#F0ECEA]">
                        <div className="flex max-w-60 items-center gap-3">
                            <div className="shrink-0 w-3 h-3 rounded-full bg-green" />
                            <span className="text-principal-text font-medium">
                                Disponible para hacer de tus proyectos una realidad
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}