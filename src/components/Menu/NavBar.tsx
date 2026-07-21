import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { navigation } from "../../data/navigation";
import LogoAstro from "../../assets/astro.svg";
import MobileMenu from "./MobileMenu";
import { navStyles, getCurrentNavHref } from "../../config/navigation.styles";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);    // Estado para controlar si el menú móvil está abierto o cerrado
    const [currentHref, setCurrentHref] = useState("/");    // Estado para almacenar la URL actual
    const [isScrolled, setIsScrolled] = useState(false);     // Estado para activar el menú fijo tras scroll
    const navRef = useRef<HTMLDivElement>(null);            // Referencia al elemento de navegación
    const pendingSectionIdRef = useRef<string | null>(null); // Espera a que la sección quede visible antes de marcarla

    // useEffect para manejar clics fuera del menú de navegación
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!navRef.current?.contains(e.target as Node)) {
                // futuros cambios: cerrar el menú si se hace clic fuera de él
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // useEffect para actualizar el href activo según la ubicación y la sección visible
    useEffect(() => {
        // Función para manejar el cambio de ubicación y actualizar el estado de currentHref
        const handleLocationChange = () => {
            const nextHref = getCurrentNavHref();
            setCurrentHref(nextHref || "/");
            pendingSectionIdRef.current = null;
        };

        // Función para manejar el scroll y actualizar el estado de isScrolled y currentHref
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            if (window.scrollY < 120) {
                setCurrentHref("/");
                pendingSectionIdRef.current = null;
            }
        };

        // Obtener los elementos de las secciones del menú
        const sectionIds = ["about-me", "projects", "technologies", "contact"];

        // Filtrar los elementos que existen en el DOM
        const sectionElements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => Boolean(element));

        if (sectionElements.length === 0) {
            handleLocationChange();
            handleScroll();
            return;
        }

        // Función para actualizar el href activo según la sección visible
        const updateActiveSection = (sectionId: string | null) => {
            if (!sectionId) {
                if (window.scrollY < 120) {
                    setCurrentHref("/");
                }
                return;
            }

            if (pendingSectionIdRef.current && pendingSectionIdRef.current !== sectionId) {
                return;
            }

            // Actualizar el href activo según la sección visible
            const nextHref = `${window.location.pathname}#${sectionId}`;
            setCurrentHref(nextHref);
            pendingSectionIdRef.current = null;
        };

        // Crear un IntersectionObserver para detectar qué sección está visible en la pantalla
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry) {
                    updateActiveSection(visibleEntry.target.id);
                }
            },
            {
                threshold: [0.2, 0.4, 0.6],
                rootMargin: "-10% 0px -45% 0px",
            }
        );

        sectionElements.forEach((element) => observer.observe(element));

        handleLocationChange();
        handleScroll();

        window.addEventListener("hashchange", handleLocationChange);
        window.addEventListener("popstate", handleLocationChange);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("hashchange", handleLocationChange);
            window.removeEventListener("popstate", handleLocationChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`relative lg:sticky lg:top-0 lg:z-50 transition-all duration-300 ${isScrolled ? "lg:top-0" : "lg:top-0"}`}>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 py-4 sm:py-6 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
            >
                {/* LOGO */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="/">
                        <img
                            src={LogoAstro.src}
                            alt="Logo"
                            className="w-25 h-15 cursor-pointer"
                        />
                    </a>
                </motion.div>

                {/* MENU DESKTOP */}
                <motion.ul
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="hidden lg:flex gap-6 items-center"
                >
                    {navigation.map((item : any) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                onClick={(event) => {
                                    event.preventDefault();
                                    const targetId = item.href?.split("#")[1];

                                    if (targetId) {
                                        pendingSectionIdRef.current = targetId;
                                        window.history.pushState(null, "", item.href ?? "/");
                                        const targetElement = document.getElementById(targetId);
                                        if (targetElement) {
                                            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }
                                    } else {
                                        pendingSectionIdRef.current = null;
                                        window.history.pushState(null, "", "/");
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }
                                }}
                                className={navStyles.getNavItemClasses(item.href ?? "", currentHref)}
                            >
                                <span
                                    className={`${navStyles.activeMarker} ${currentHref === (item.href ?? "/") ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                                    aria-hidden="true"
                                />

                                {item.label}
                            </a>
                        </li>
                    ))}
                </motion.ul>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="hidden lg:flex"
                >
                    <a href="#contact" className="flex justify-center items-center h-14 px-8 rounded-[26px] bg-green text-principal-text md:text-xl font-semibold transition-all duration-300 hover:shadow-button hover:scale-105 cursor-pointer">
                        Hablemos
                    </a>
                </motion.div>

                {/* HAMBURGER */}
                <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onClick={() => setMobileOpen(true)}
                    className={`lg:hidden text-2xl text-principal-text hover:text-secondary-text transition-colors duration-300 cursor-pointer
                        ${mobileOpen ? "opacity-0 pointer-events-none" : ""}
                    `}
                >
                    <GiHamburgerMenu />
                </motion.button>
            </nav>

            {/* OVERLAY */}
            {mobileOpen && (
                <div onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/40 z-40 lg:hidden"/>
            )}

            {/* MENU MÓVIL */}
            <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} currentHref={currentHref}/>
        </div>
    );
}