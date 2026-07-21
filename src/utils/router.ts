/**
 * Devuelve la BASE_URL sin la barra final.
 *
 * localhost: "/"
 * GitHub Pages: "/portfolio/"
 */
export const getBaseUrl = () => {
    const base = import.meta.env.BASE_URL;

    return base === "/" ? "" : base.replace(/\/$/, "");
};

/**
 * Construye una URL compatible con Astro y GitHub Pages.
 *
 * "/"           -> "/portfolio/"
 * "/#about"     -> "/portfolio/#about"
 */
export const buildUrl = (href: string) => {
    return `${getBaseUrl()}${href}`;
};