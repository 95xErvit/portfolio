import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    //SiAmazonwebservices,
    //SiMicrosoftsqlserver,
    SiFigma,
    SiGit,
    SiDocker,
    SiVercel,
} from "react-icons/si";

import type { IconType } from "react-icons";

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
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
    },
    {
        id: 4,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
    },
    {
        id: 5,
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
    },
    {
        id: 6,
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
    },
    {
        id: 7,
        name: "AWS",
        icon: SiMongodb,//SiAmazonwebservices,
        color: "#FF9900",
    },
    {
        id: 8,
        name: "SQL Server",
        icon: SiMongodb,//SiMicrosoftsqlserver,
        color: "#CC2927",
    },
    {
        id: 9,
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
    },
    {
        id: 10,
        name: "Git",
        icon: SiGit,
        color: "#F05032",
    },
    {
        id: 11,
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
    },
    {
        id: 12,
        name: "Vercel",
        icon: SiVercel,
        color: "#171717",
    },
];