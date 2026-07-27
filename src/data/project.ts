import { buildAssetUrl } from "../utils/router";

export const projects = [
    {
        id: 1,
        title: "Intranet Financiera",
        description: "Plataforma interna para gestión de créditos, aprobaciones y procesos financieros.",
        image: "",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "SQL Server",
        ],
        url: "#",
    },

    {
        id: 2,
        title: "Sistema de Créditos",
        description: "Módulo de solicitud, análisis y aprobación de créditos para clientes.",
        image: buildAssetUrl("/PasarelaCredito.jpg"),
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "SQL Server",
            "Figma",
            "AWS",
        ],
        url: "#",
    },

    {
        id: 3,
        title: "Módulo PQRS",
        description: "Web de gestión de peticiones, quejas y reclamos con seguimiento y reportes.",
        image: buildAssetUrl("/PQRS.jpg"),
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "SQL Server",
            "Figma",
            "AWS",
        ],
        url: "#",
    },
];