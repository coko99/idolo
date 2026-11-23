export const routes = {
  home: "/",
  menu: "/meni",
  about: "/o-nama",
  gallery: "/galerija",
  contact: "/kontakt",
} as const;

export const navLinks = [
  { href: routes.home, label: "Početna" },
  { href: routes.menu, label: "Meni" },
  { href: routes.about, label: "O nama" },
  { href: routes.gallery, label: "Galerija" },
  { href: routes.contact, label: "Kontakt" },
] as const;
