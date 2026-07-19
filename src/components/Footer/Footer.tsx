
import { FiMail, FiMapPin, FiClock, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full px-4 md:px-8 lg:px-12 pb-8">

            {/* CONTACT CTA */}
            <section className="w-full rounded-[36px] bg-gray-card px-6 md:px-10 lg:px-16 py-10 lg:py-14 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_auto] gap-10 items-center">

                    {/* LEFT */}
                    <div className="space-y-5">
                        <span className="text-[#59B400] text-lg font-semibold uppercase tracking-wider">
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
                    </div>

                    {/* CENTER */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E8FFD0] flex items-center justify-center">
                                <FiMail className="text-green text-xl" />
                            </div>

                            <a href="mailto:erikvillarreal9505@gmail.com" className="text-principal-text font-medium">
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
                    </div>

                    {/* RIGHT */}
                    <div className="flex justify-start lg:justify-end">
                        <button className="h-14 px-10 rounded-full bg-green text-principal-text font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg shadow-green/40 cursor-pointer">
                            Enviar mensaje

                            <div className="w-7 h-7 rounded-full border border-text-principal flex items-center justify-center">
                                <FiArrowUpRight size={14} />
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* FOOTER BOTTOM */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 px-2">
                <p className="text-sm text-[#4B5563] text-center md:text-left font-semibold">
                    © {new Date().getFullYear()} Erik Villarreal. Todos los derechos reservados.
                </p>

                <div className="flex items-center gap-8">
                    <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-[28px] text-principal-text transition-colors duration-300 hover:text-green">
                        <FaGithub />
                    </a>

                    <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-[28px] text-principal-text transition-colors duration-300 hover:text-green">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </footer>
    );
}