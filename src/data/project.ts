import { buildAssetUrl } from "../utils/router";

export const projects = [
    {
        id: 1,
        title: "Intranet Corporativa",
        description: "Rediseño UX/UI y desarrollo web para la actualización del portal de intranet para <strong>la Feria del brasier y solo kuko's</strong> para la gestión de información y procesos internos de la empresa, incluyendo módulo de administración y módulos por área de la compañia, para su comunicación y colaboración.",
        image: buildAssetUrl("/Intranet_FDB.png"),
        url: "https://intranet.feriadelbrasier.com.co/",
    },

    {
        id: 2,
        title: "Sistema de Créditos",
        description: "Diseño UX/UI y Desarrollo de plataforma web <strong>CrediFeria</strong> para <strong>la Feria del brasier y solo kuko's</strong>, para la gestión integral de créditos y autogestión de clientes, incluyendo solicitudes, aprobaciones y seguimiento. Con módulo de administración, indicadores en tiempo real y procesos digitales.",
        image: buildAssetUrl("/CrediFeria.png"),
        url: "https://creditos.feriadelbrasier.com.co/",
    },

    {
        id: 3,
        title: "Sistema de PQRS",
        description: "Diseño UX/UI y Desarrollo de plataforma Web de gestión de PQRS para <strong>la Feria del brasier y solo kuko's</strong>, con módulo de administración para la gestión del proyecto. Sistema de gestión de peticiones, quejas, reclamos y solicitudes, con notificaciones, seguimiento y reportes.",
        image: buildAssetUrl("/PQRS.png"),
        url: "https://pqrs.feriadelbrasier.com.co/Client",
    },

    {
        id: 4,
        title: "Ecommerce Ropa Interior",
        description: "Construcción de Ecommerce para la empresa <strong>Ludana</strong>, con catálogo de productos, carrito de compras, pasarela de pago y gestión de pedidos. Configuración de un sistema de administración para la gestión de productos, categorías, clientes y pedidos.",
        image: buildAssetUrl("/Ecommerce_Ludana.png"),
        url: "https://ludana.com.co/",
    },

    {
        id: 5,
        title: "Ecommerce Agencia de Viajes",
        description: "Construcción de Ecommerce para la empresa <strong>Vuelta al Mundo Tours</strong>, con catálogo de destinos, carrito de compras, pasarela de pago y gestión de pedidos. Configuración de un sistema de administración para la gestión de productos, categorías, clientes y pedidos.",
        image: buildAssetUrl("/Ecommerce_VTM.png"),
        url: "https://vueltalmundotours.com.co/",
    },
];