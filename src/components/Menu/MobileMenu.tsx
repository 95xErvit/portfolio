import React from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { navigation } from "../../data/navigation";
import { navStyles } from "../../config/navigation.styles";

// Props para el componente MobileMenu
type Props = {
    mobileOpen: boolean;
    setMobileOpen: (value: boolean) => void;
    currentHref: string;
};

export default function MobileMenu({ mobileOpen, setMobileOpen, currentHref }: Props) {
    // Variantes para animaciones de framer-motion
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    // Variantes para animaciones de framer-motion de cada item
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 15,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: mobileOpen ? 0 : "100%" }}
            transition={{ duration: 0.35 }}
            className="lg:hidden fixed top-0 right-0 w-[95%] sm:max-w-sm h-screen bg-white z-50 shadow-xl"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={mobileOpen ? "visible" : "hidden"}
                className="flex flex-col gap-6 p-6 pt-20"
            >
                {/* Cierre de manú */}
                <motion.button
                    variants={itemVariants}
                    onClick={() => setMobileOpen(false)}
                    className="absolute top-6 right-6 text-3xl text-principal-text hover:text-secondary-text transition-colors duration-300 cursor-pointer"
                >
                    <MdClose />
                </motion.button>

                {/* ITEMS */}
                {navigation.map((item : any) => (
                    <motion.a
                        key={item.label}
                        variants={itemVariants}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={navStyles.getNavItemClasses(item.href ?? "", currentHref, true)}
                    >
                        {currentHref === item.href && (
                            <span className={navStyles.activeMarker} />
                        )}

                        {item.label}
                    </motion.a>
                ))}

                {/* Botón de acción */}
                <motion.div variants={itemVariants} className="mt-8">
                    <button className="w-full h-14 text-xl rounded-full bg-green text-principal-text font-semibold transition-all duration-300 hover:scale-105">
                        Hablemos
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}