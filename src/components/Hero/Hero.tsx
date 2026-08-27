import React from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { RiPaletteLine } from 'react-icons/ri';  // Para Diseño/Creatividad
import { ImEmbed2 } from "react-icons/im";
import { HiOutlineLightBulb } from 'react-icons/hi';
import { buildUrl } from "../../utils/router";

export default function Hero() {
    // Configuración de la animación flotante suave
  const floatAnimation = (delay: number) => ({
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: delay,
    },
  });

    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex items-center px-6 md:px-12 xl:px-24 py-28 md:py-10 xl:py-14"
        >
            <div className="w-full max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* LEFT */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center md:items-start"
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
                    <div className="mt-10 flex justify-center md:justify-start gap-5">
                        <a 
                            href="#projects" 
                            className="
                                flex items-center gap-2 md:gap-3 h-14 px-5 md:px-8 rounded-full bg-green text-xs md:text-base text-principal-text font-semibold transition-all duration-300 cursor-pointer no-underline 
                                hover:-translate-y-1 hover:shadow-button hover:bg-green-hover 
                                active:scale-[0.98] active:bg-green-active
                            "
                        >
                            Ver proyectos
                            <FiArrowRight size={18} />
                        </a>

                        <button 
                            className="
                                flex items-center gap-2 md:gap-3 h-14 px-5 md:px-8 rounded-full bg-white text-xs md:text-base text-principal-text font-semibold border border-border-white transition-all duration-300 cursor-pointer
                                hover:-translate-y-1 hover:shadow-button hover:bg-gray-100
                                active:scale-[0.98] active:bg-gray-200"
                            >
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
                    className="relative flex justify-center items-center md:min-h-137.5"
                >
                    {/* Columna Derecha: Avatar Memoji 3D con animación */}
                    <div className="relative flex items-center justify-center w-80 h-80 sm:w-100 sm:h-100">
                        {/* Anillo exterior con gradiente azul-verde suave */}
                        <div className="relative w-80 h-80 sm:w-100 sm:h-100 rounded-full p-4 bg-linear-to-b from-[#8eb2d8] via-[#a6d7c4] to-[#c2eb71] shadow-lg flex items-center justify-center">
                            
                            {/* Contenedor circular del Memoji */}
                            <div className="w-full h-full rounded-full overflow-hidden bg-linear-to-b from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center">
                                <img
                                    src={buildUrl("/Erik_Memoji.png")}
                                    alt="Erik Memoji 3D"
                                    className="w-80 h-80 object-cover object-center"
                                />
                            </div>

                            {/* Badges flotantes alineados a la derecha */}
                            <div className="absolute -right-3.75 sm:-right-5 top-[10%] bottom-[10%] flex flex-col justify-around z-20 gap-3">
                                {/* Badge 1: Código / Desarrollo */}
                                <motion.div
                                    animate={floatAnimation(0)}
                                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 flex items-center justify-center"
                                    title="Desarrollo / Código"
                                >
                                    <ImEmbed2  className="w-7 h-7 text-[#9fdf39]" /> {/* Icono de código en azul cian */}
                                </motion.div>

                                {/* Badge 2: Innovación */}
                                <motion.div
                                    animate={floatAnimation(1.2)}
                                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 flex items-center justify-center translate-x-2"
                                    title="Innovación / Ideas"
                                >
                                    <HiOutlineLightBulb className="w-7 h-7 text-[#f0b44d]" /> {/* Icono de bombilla en amarillo/naranja */}
                                </motion.div>

                                {/* Badge 3: Diseño / Creatividad */}
                                <motion.div
                                    animate={floatAnimation(2.4)}
                                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 flex items-center justify-center"
                                    title="Diseño / Creatividad"
                                >
                                    <RiPaletteLine className="w-7 h-7 text-[#e990bd]" /> {/* Icono de paleta en rosa intenso */}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Badge flotante */}
                    <div className="absolute -bottom-20 md:bottom-0 md:right-0 bg-white p-4 rounded-3xl shadow-lg border border-[#F0ECEA]">
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