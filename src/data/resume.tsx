import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { AWS } from "@/components/ui/svgs/aws";
import { GitHub } from "@/components/ui/svgs/github";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Redis } from "@/components/ui/svgs/redis";
import { GraphQL } from "@/components/ui/svgs/graphql";

export const DATA = {
  name: "Sheikh",
  initials: "AS",
  url: "https://amansheikh.in",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Full-stack developer & founder. I build product-first web apps (Next.js + MongoDB). Ship weekly, learn fast.",
  summary:
    "I’m a self-taught full-stack developer (Next.js + MongoDB) who builds product-first web apps from prototype to production. Launched [StationeryWala (Jan 26, 2026)](https://www.stationerywala.shop); building [Trible](/#projects) and [Zappotel](/#projects). I handle [payments, file uploads, admin dashboards, deployments](/xyz) and publish progress on [LinkedIn/X](/#links).",
  avatarUrl:
    "https://res.cloudinary.com/dzh0fn9uv/image/upload/v1769503156/champ_phnnxt.jpg",
  skills: [
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "MongoDB", icon: MongoDB },
    { name: "Tailwind CSS", icon: TailwindCSS },
    { name: "AWS", icon: AWS },
    { name: "GitHub", icon: GitHub },
    { name: "C++", icon: Cpp },
    { name: "Docker", icon: Docker },
    { name: "Postgres", icon: Postgresql },
    { name: "Redis", icon: Redis },
    { name: "GraphQL", icon: GraphQL },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@aman.dev",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/valorasheikh",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/valorant-aman-238a73335/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/amansheikhkhan",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@aman.dev",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "StationeryWala",
      href: "https://stationerywala.shop",
      badges: ["Launched"],
      location: "Remote",
      title: "Founder & Full-stack Developer",
      logoUrl:
        "https://res.cloudinary.com/dxukg1fmx/image/upload/v1769502561/favicon.ico_ciywdn.jpg",
      start: "Jan 2026",
      end: "Present",
      description:
        "Launched an affordable stationery e-commerce platform. Responsible for product design, front-end (Next.js), backend (Node.js + MongoDB), payments and deployment. Iterating fast on customer feedback and conversion optimization.",
    },
    {
      company: "Trible / Zappotel",
      href: "#",
      badges: ["In progress"],
      location: "Remote",
      title: "Founder",
      logoUrl:
        "https://res.cloudinary.com/dxukg1fmx/image/upload/v1762752905/logoipsum-custom-logo_2_sp0jpo.svg",
      start: "Feb 2026",
      end: "Present",
      description:
        "Building the next product — early-stage. Focus: product-market fit, rapid prototyping with Next.js and MongoDB, and preparing initial pilots.",
    },
  ],

  education: [
    {
      school: "Self-Taught Software Engineering",
      href: "#",
      degree: "Full-stack development (Next.js, MongoDB, PostgreSQL, Node.js)",
      logoUrl: "https://res.cloudinary.com/dzh0fn9uv/image/upload/v1769507822/deep-learning_raohzf.png",
      start: "2023",
      end: "Present",
    },
  ],

  projects: [
    {
      title: "Trible / Zappotel (early)",
      href: "#",
      dates: "Feb 2026 - Present",
      active: true,
      description:
        "Early-stage product focused on an industry-specific SaaS offering. Currently prototyping and validating with pilot users.",
      technologies: ["Next.js", "TypeScript", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dzh0fn9uv/image/upload/v1769505773/Screenshot_349_t9ohyb.png",
      video: "",
    },
    {
      title: "StationeryWala",
      href: "https://stationerywala.shop/",
      dates: "Jan 2026",
      active: true,
      description:
        "An affordable stationery e-commerce store — launched and iterating on growth and retention.",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "TailwindCSS",
        "PhonePe",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.stationerywala.shop/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dzh0fn9uv/image/upload/v1769505448/Screenshot_415_tnekg2.png",
      video: "",
    },
    {
      title: "Ultimate Stationery (vision)",
      href: "#",
      dates: "Ongoing",
      active: false,
      description:
        "Long-term goal: build the definitive stationery marketplace — multi-tenant, custom pricing, and supremely fast UX.",
      technologies: ["Next.js", "MongoDB", "Stripe"],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
  ],
} as const;
