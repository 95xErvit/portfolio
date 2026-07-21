
export interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Sobre mí",
    href: "/#about-me",
  },
  {
    label: "Proyectos",
    href: "/#projects",
  },
  {
    label: "Stack",
    href: "/#technologies",
  },
  {
    label: "Contacto",
    href: "/#contact",
  },
];