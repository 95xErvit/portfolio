export const navStyles = {
  // Clases CSS para los enlaces de navegación en escritorio
  desktopLink: `flex items-center gap-2 text-lg font-semibold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] `,

  // Clases CSS para los enlaces de navegación en móvil
  mobileLink: `flex items-center gap-2 text-xl font-semibold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] `,

  // Clases CSS para el indicador de navegación activo
  activeMarker: `inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-green-active shrink-0 opacity-0 scale-0 pointer-events-none transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`,

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