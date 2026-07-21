
import { FiMail, FiMapPin, FiClock, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full px-4 md:px-8 lg:px-12 pb-8">

            {/* CONTACT CTA */}
            <motion.section 
                id="contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full rounded-[36px] bg-gray-card px-6 md:px-10 lg:px-16 py-10 lg:py-14 shadow-sm"
            >
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_auto] gap-10 items-center">

                    {/* LEFT */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5"
                    >
                        <span className="text-green-title text-lg font-semibold uppercase tracking-wider">
                            Contáctame
                        </span>

                        <h2 className="text-[36px] md:text-[52px] leading-[1.1] font-bold text-principal-text">
                            ¿Tienes un proyecto
                            <br />
                            en mente? Hablemos
                            <span className="text-green">.</span>
                        </h2>

                        <p className="max-w-md text-[#6B7280] text-lg leading-relaxed">
                            Estoy disponible para colaborar en proyectos increíbles y construir soluciones digitales que marquen la diferencia.
                        </p>
                    </motion.div>

                    {/* CENTER */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E8FFD0] flex items-center justify-center">
                                <FiMail className="text-green text-xl" />
                            </div>

                            <a href="mailto:erikvillarreal9505@gmail.com" className="text-principal-text font-medium hover:text-secondary-text transition-colors duration-300">
                                erikvillarreal9505@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E8FFD0] flex items-center justify-center">
                                <FiMapPin className="text-green text-xl" />
                            </div>

                            <span className="text-principal-text font-medium">
                                Medellín,Colombia
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E8FFD0] flex items-center justify-center">
                                <FiClock className="text-green text-xl" />
                            </div>

                            <span className="text-principal-text font-medium">
                                Disponible para trabajo remoto
                            </span>
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <a 
                            href="https://api.whatsapp.com/send/?phone=573166100902&text=Hola,%20Erik!%20Me%20gustar%C3%ADa%20trabajar%20con%20vos.%20&app_absent=0" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="h-14 px-10 rounded-full bg-green text-principal-text font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-button cursor-pointer"
                        >
                            Enviar mensaje

                            <div className="w-7 h-7 rounded-full border border-text-principal flex items-center justify-center">
                                <FiArrowUpRight size={14} />
                            </div>
                        </a>
                    </motion.div>
                </div>
            </motion.section>

            {/* FOOTER BOTTOM */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 px-2"
            >
                <p className="text-sm text-[#4B5563] text-center md:text-left font-semibold">
                    © {new Date().getFullYear()} Erik Villarreal. Todos los derechos reservados.
                </p>

                <div className="flex items-center gap-8">
                    <a href="https://github.com/95xErvit" target="_blank" rel="noopener noreferrer" className="text-[28px] text-principal-text transition-colors duration-300 hover:text-green">
                        <FaGithub />
                    </a>

                    <a href="www.linkedin.com/in/erik-villarreal-614094224" target="_blank" rel="noopener noreferrer" className="text-[28px] text-principal-text transition-colors duration-300 hover:text-green">
                        <FaLinkedinIn />
                    </a>
                </div>
            </motion.div>
        </footer>
    );
}