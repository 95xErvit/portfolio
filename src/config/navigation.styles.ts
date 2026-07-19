export const navStyles = {
  desktopLink: `flex items-center gap-2 text-lg font-semibold transition-colors duration-300 `,

  mobileLink: `flex items-center gap-2 text-xl font-semibold transition-colors duration-300 `,

  activeMarker: `inline-block w-2.5 h-2.5 rounded-full bg-green-active shrink-0`,

  // Esta función devuelve las clases CSS para un elemento de navegación, 
  // dependiendo de si es móvil o de escritorio y si está activo.
  getNavItemClasses: (href: string, currentHref: string, isMobile = false) => {
    const base = isMobile ? navStyles.mobileLink : navStyles.desktopLink;
    const isActive = href === currentHref;
    return `${base} ${isActive ? "text-principal-text hover:text-secondary-text" : "text-secondary-text hover:text-principal-text"}`.trim();
  },
};

// Esta función obtiene el href actual de la página, incluyendo el hash si existe.
export const getCurrentNavHref = (): string => {
  if (typeof window === "undefined") {
    return "";
  }

  const { pathname, hash } = window.location;
  return hash ? `${pathname}${hash}` : pathname;
};