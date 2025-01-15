import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Eddy Santiago",
  initials: "ES",
  url: "https://eddyy.dev/",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/medellin",
  description: "Un loco",
  summary: "Trabajando en el summary!",
  avatarUrl: "https://avatars.githubusercontent.com/u/85720891?v=4",
  skills: [
    "Laravel",
    "Next.js",
    "Typescript",
    "React",
    "WordPress",
    "Figma",
    "Elementor",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/eddysantiagoo",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eddysantiagoo/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/eddy.santiagoo/",
        icon: Icons.instagram,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      // email: {
      //   name: "Send Email",
      //   url: "#",
      //   icon: Icons.email,

      //   navbar: false,
      // },
    },
  },

  work: [
    {
      company: "Gestoru Software",
      href: "https://principal.gestoru.com/",
      badges: [],
      location: "Medellin, Colombia",
      title: "Desarrollador Frontend y Diseñador UI UX",
      logoUrl: "/gestoru.webp",
      start: "Jun 2023",
      end: "Presente",
      description:
        "Desarrollo de aplicaciones web, diseño de interfaces de usuario y experiencia de usuario.",
    },
  ],
  education: [
    {
      school: "Institución Universitaria Digital de Antioquia",
      href: "https://www.iudigital.edu.co/",
      degree: "Tecnólogo en desarrollo de software",
      logoUrl: "/iudigital.jpg",
      start: "Ene 2020",
      end: "Sep 2023",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
