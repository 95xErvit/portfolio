import { buildAssetUrl } from "../utils/router";

export const projects = [
    {
        id: 1,
        title: "Intranet Financiera",
        description: "Plataforma interna para gestión de créditos, aprobaciones y procesos financieros.",
        image: buildAssetUrl("/Intranet_FDB.png"),
        url: "https://intranet.feriadelbrasier.com.co/",
    },

    {
        id: 2,
        title: "Sistema de Créditos",
        description: "Módulo de solicitud, análisis y aprobación de créditos para clientes.",
        image: buildAssetUrl("/CrediFeria.png"),
        url: "https://creditos.feriadelbrasier.com.co/",
    },

    {
        id: 3,
        title: "Módulo PQRS",
        description: "Web de gestión de peticiones, quejas y reclamos con seguimiento y reportes.",
        image: buildAssetUrl("/PQRS.png"),
        url: "https://pqrs.feriadelbrasier.com.co/Client",
    },
];