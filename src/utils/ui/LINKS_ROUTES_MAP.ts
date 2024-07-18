interface LinkRoute {
  title: string;
  href: string;
  icon: string;
}

export const LINKS_ROUTES_GENERAL: LinkRoute[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: "icon-[fluent--home-12-filled]",
  },
  {
    title: "Products",
    href: "/products",
    icon: "icon-[mage--package-box]",
  },
  {
    title: "Sales",
    href: "/sales",
    icon: "icon-[circum--shopping-basket]",
  },
  {
    title: "Merchant",
    href: "/merchant",
    icon: "icon-[solar--shop-linear]",
  },
  {
    title: "Clients",
    href: "/clients",
    icon: "icon-[tabler--users]",
  },
  {
    title: "Files",
    href: "/files",
    icon: "icon-[lets-icons--file]",
  },
  {
    title: "Cash",
    href: "/cash",
    icon: "icon-[lets-icons--file]",
  },
  {
    title: "Cash balance",
    href: "/cash-balance",
    icon: "icon-[lets-icons--file]",
  },
  {
    title: "Discounts",
    href: "/discounts",
    icon: "icon-[lets-icons--file]",
  },
];

export const LINKS_ROUTES_PERSONAL: LinkRoute[] = [
  {
    title: "Profile",
    href: "/profile",
    icon: "icon-[iconamoon--profile-fill]",
  },
  {
    title: "logout",
    href: "/auth/login",
    icon: "icon-[mynaui--logout]",
  },
];
