import type { IconType } from "react-icons";
import { SiNextdotjs, SiReact, SiTypescript, SiCss, SiTailwindcss, SiGsap, SiNodedotjs, SiMongodb, SiAstro, SiGit, SiStencil, SiWordpress, SiWoocommerce  } from "react-icons/si";
import { FaSquareJs } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

export type Technology = {
    id: number;
    name: string;
    icon: IconType;
    color: string;
};

export const technologies: Technology[] = [
    {
        id: 1,
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#171717",
    },
    {
        id: 2,
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
    },
    {
        id: 3,
        name: "Astro",
        icon: SiAstro,
        color: "#171717",
    },
    {
        id: 4,
        name: "Stencil",
        icon: SiStencil,
        color: "#171717",
    },
    {
        id: 5,
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
    },
    {
        id: 6,
        name: "Javascript",
        icon: FaSquareJs,
        color: "#F7DF1E",
    },
    {
        id: 7,
        name: "CSS",
        icon: SiCss,
        color: "#1572B6",
    },
    {
        id: 8,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
    },
    {
        id: 9,
        name: "GSAP",
        icon: SiGsap,
        color: "#88CE02",
    },
    
    {
        id: 10,
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
    },
    {
        id: 11,
        name: "AWS",
        icon: FaAws,
        color: "#FF9900",
    },
    {
        id: 12,
        name: "SQL Server",
        icon: DiMsqlServer,
        color: "#CC2927",
    },
    {
        id: 13,
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
    },
    {
        id: 14,
        name: "Figma",
        icon: FaFigma,
        color: "#000000",
    },
    {
        id: 15,
        name: "Git",
        icon: SiGit,
        color: "#F05032",
    },
    {
        id: 16,
        name: "WordPress",
        icon: SiWordpress,
        color: "#21759B",
    },
    {
        id: 17,
        name: "WooCommerce",
        icon: SiWoocommerce,
        color: "#96588A",
    }
];
