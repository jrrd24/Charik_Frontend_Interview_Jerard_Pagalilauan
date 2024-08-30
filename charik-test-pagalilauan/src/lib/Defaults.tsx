import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const NAV_LINKS = [
  {
    id: 1,
    title: "Charik",
    path: undefined,
    subitems: [
      { id: 1, title: "Software 🦚", path: "/software" },
      { id: 2, title: "Email Finder 💌", path: "/email-finder" },
      { id: 3, title: "Company Search 🔎", path: "/company" },
    ],
  },

  {
    id: 2,
    title: "Pricing",
    path: "/pricing",
    subitems: undefined,
  },

  {
    id: 3,
    title: "About",
    path: "/about",
    subitems: undefined,
  },

  {
    id: 4,
    title: "Resources",
    path: undefined,
    subitems: [
      { id: 1, title: "Insights", path: "/insights" },
      { id: 2, title: "Knowledge Base", path: "/help" },
      { id: 3, title: "SPF Tester", path: "/verify" },
    ],
  },
];

export const SOCMED_LINKS = [
  {
    id: 1,
    Icon: FaXTwitter,
    link: "https://x.com/charik_app",
    order: 2,
  },
  {
    id: 2,
    Icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/charikapp/",
    order: 1,
  },
  {
    id: 3,
    Icon: FaInstagram,
    link: "https://www.instagram.com/charik_app/",
    order: 3,
  },
  {
    id: 4,
    Icon: FaFacebookF,
    link: "https://www.facebook.com/charikapp",
    order: 4,
  },
  {
    id: 5,
    Icon: FaYoutube,
    link: "https://www.youtube.com/@Charikapp",
    order: 5,
  },
];

export const FOOTER_LINKS = [
  {
    id: 1,
    title: "Features",
    links: [
      { id: 1, title: "Email Finder 💌", path: "/email-finder" },
      { id: 2, title: "Company Search 🔎", path: "/company" },
      {
        id: 3,
        title: "Key People Search 👯",
        path: "/insights/recherche-keypeople-par-nom",
      },
    ],
  },
  {
    id: 2,
    title: "Resources",
    links: [
      { id: 1, title: "Read our Blog", path: "/insights" },
      { id: 2, title: "Partners", path: "/partners-program" },
      {
        id: 3,
        title: "Ebooks & Guides",
        path: "/#",
      },
      {
        id: 4,
        title: "Downloads",
        path: "/#",
      },
      {
        id: 5,
        title: "Knowledge Base",
        path: "/help",
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    links: [
      { id: 1, title: "Charik Software", path: "/software" },
      { id: 2, title: "About Us", path: "/about" },
      {
        id: 3,
        title: "Contact Us",
        path: "/software/#",
      },
    ],
  },
];

export const FOOTER_SHORTCUTS = [
  { id: 1, title: "Terms & Conditions", path: "/terms-and-conditions" },
  { id: 2, title: "Privacy Policy", path: "/privacy-policy" },
  { id: 3, title: "Support@charik.app", path: "mailto:Support@charik.app" },
];
