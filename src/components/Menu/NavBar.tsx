import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { navigation } from "../../data/navigation";
import LogoAstro from "../../assets/astro.svg";
import MobileMenu from "./MobileMenu";
import { navStyles, getCurrentNavHref } from "../../config/navigation.styles";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);    // Estado para controlar si el menú móvil está abierto o cerrado
    const [currentHref, setCurrentHref] = useState("");     // Estado para almacenar la URL actual
    const navRef = useRef<HTMLDivElement>(null);            // Referencia al elemento de navegación

    // useEffect para manejar clics fuera del menú de navegación
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!navRef.current?.contains(e.target as Node)) {
                // aquí podrías cerrar dropdowns futuros
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // useEffect para actualizar el href actual cuando cambia la ubicación
    useEffect(() => {
        setCurrentHref(getCurrentNavHref());

        const handleLocationChange = () => {
            setCurrentHref(getCurrentNavHref());
        };

        window.addEventListener("hashchange", handleLocationChange);
        window.addEventListener("popstate", handleLocationChange);

        return () => {
            window.removeEventListener("hashchange", handleLocationChange);
            window.removeEventListener("popstate", handleLocationChange);
        };
    }, []);

    return (
        <div className="relative">
            <nav
                ref={navRef}
                className="flex items-center justify-between px-6 md:px-20 py-8 bg-transparent"
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
                            <a href={item.href} className={navStyles.getNavItemClasses(item.href ?? "", currentHref)}>
                                {navStyles.activeMarker && currentHref === item.href && (
                                    <span className={navStyles.activeMarker} />
                                )}

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
                    <button className="h-14 px-8 rounded-[26px] bg-green text-principal-text md:text-xl font-semibold shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                        Hablemos
                    </button>
                </motion.div>

                {/* HAMBURGER */}
                <button
                    onClick={() => setMobileOpen(true)}
                    className={`lg:hidden text-2xl text-principal-text hover:text-secondary-text transition-colors duration-300 cursor-pointer
                        ${mobileOpen ? "opacity-0 pointer-events-none" : ""}
                    `}
                >
                    <GiHamburgerMenu />
                </button>
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