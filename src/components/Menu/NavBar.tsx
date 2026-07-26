import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { navigation } from "../../data/navigation";
import LogoAstro from "../../assets/astro.svg";
import MobileMenu from "./MobileMenu";
import { navStyles, getCurrentNavHref } from "../../config/navigation.styles";
import { buildUrl } from "../../utils/router";

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
        // IDs de las secciones que queremos rastrear
        const sectionIds = ["about-me", "projects", "technologies", "contact"];

        // Elementos de las secciones
        const sectionElements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => Boolean(element));

        // Función para actualizar el href activo
        const handleLocationChange = () => {
            const nextHref = getCurrentNavHref();

            if (nextHref) {
                setCurrentHref(nextHref);
            }
        };

        // Función para actualizar el href activo basado en la sección visible
        const updateActiveSection = (sectionId: string | null) => {

            if (!sectionId) return;

            if (
                pendingSectionIdRef.current &&
                pendingSectionIdRef.current !== sectionId
            ) {
                return;
            }

            const nextHref = `/#${sectionId}`;

            setCurrentHref((prev) => {
                if (prev === nextHref) return prev;
                return nextHref;
            });

            pendingSectionIdRef.current = null;
        };

        // Función para actualizar el href activo basado en el scroll
        const updateActiveSectionByScroll = () => {

            setIsScrolled(window.scrollY > 20);

            if (window.scrollY < 120) {
                setCurrentHref("/");
                pendingSectionIdRef.current = null;
                return;
            }

            // Cuando llega al final de la página, siempre marcar Contact.
            const isAtBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 5;

            if (isAtBottom) {
                updateActiveSection("contact");
                return;
            }

            // Línea de referencia para determinar la sección más cercana al centro de la pantalla
            const viewportLine = window.innerHeight * 0.35;

            let closestSection: HTMLElement | null = null;
            let closestDistance = Number.POSITIVE_INFINITY;

            // Iterar sobre las secciones para encontrar la más cercana a la línea de referencia
            for (const section of sectionElements) {

                const rect = section.getBoundingClientRect();

                const distance = Math.abs(rect.top - viewportLine);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = section;
                }
            }

            if (closestSection) {
                updateActiveSection(closestSection.id);
            }
        };

        handleLocationChange();
        updateActiveSectionByScroll();

        window.addEventListener("scroll", updateActiveSectionByScroll, {
            passive: true,
        });

        window.addEventListener("hashchange", handleLocationChange);

        window.addEventListener("popstate", handleLocationChange);

        // Cleanup de los event listeners al desmontar el componente
        return () => {

            window.removeEventListener(
                "scroll",
                updateActiveSectionByScroll
            );

            window.removeEventListener(
                "hashchange",
                handleLocationChange
            );

            window.removeEventListener(
                "popstate",
                handleLocationChange
            );
        };

    }, []);

    // Función para manejar la navegación a una sección específica
    const handleNavigation = (href: string) => {
        const targetId = href.split("#")[1]; // Extrae el ID de la sección del href

        if (targetId) {
            pendingSectionIdRef.current = targetId;

            window.history.pushState(
                null,
                "",
                buildUrl(href)
            );

            document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            pendingSectionIdRef.current = null;

            window.history.pushState(
                null,
                "",
                buildUrl("/")
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

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
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(item.href ?? "/");
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
                    <button
                        className="
                            flex justify-center items-center h-14 px-8 rounded-[26px] bg-green text-principal-text md:text-xl font-semibold transition-all duration-300 cursor-pointer
                            hover:-translate-y-1 hover:shadow-button hover:bg-green-hover 
                            active:scale-[0.98] active:bg-green-active                   
                        "
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/#contact");
                        }}
                    >
                        Hablemos
                    </button>
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
            <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} currentHref={currentHref} onNavigate={handleNavigation}/>
        </div>
    );
}