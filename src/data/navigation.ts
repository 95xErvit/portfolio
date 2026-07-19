
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
    href: "/#about",
  },
  {
    label: "Proyectos",
    href: "/#projects",
  },
  {
    label: "Experiencia",
    href: "/#experience",
  },
  {
    label: "Contacto",
    href: "/#contact",
  },
];