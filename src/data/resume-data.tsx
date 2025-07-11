import GnogonsImage from "@/resources/projects/gnogons-cover.jpg";
import GreatWarImage from "@/resources/projects/great-war-cover.jpg";
import MelbaImage from "@/resources/projects/melba-cover.jpg";
import ReboomImage from "@/resources/projects/reboom-cover.jpg";
import RizenCityImage from "@/resources/projects/rizen-city-cover.jpeg";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import type { ResumeData } from "data";

export const RESUME_DATA: ResumeData = {
  name: "Paul-louis Bautes",
  initials: "PLB",
  location: "Greater Paris Metropolitan Region",
  locationLink: "https://www.google.com/maps/place/Greater+Paris+Metropolitan+Region",
  about: "Web Developer & Entrepreneur | Passionate about Web3 & AI ⚡",
  summary:
    "I am currently working as an advisor and developer in the tech industry with a strong background in computer science. I specialize in javascript/typescript and focus on architecting platforms, building infrastructure to frontend development, ensuring efficiency and user-friendliness. My approach includes leading teams, staying updated with tech trends, and contributing to client and organizational growth.",
  avatarUrl: "https://avatars.githubusercontent.com/u/3282055?s=400&u=8b1c324ceac2a4e417ffd4fb47e91b83e56af31f&v=4",
  personalWebsiteUrl: "https://dunniabs.com",
  contact: {
    email: "plbautes@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Frumba",
        icon: GithubLogo,
      },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/👾-paul-louis-b-4a832a5a",
        icon: LinkedinLogo,
      },
    ],
  },
  education: [
    {
      school: "EPITECH - European Institute of Technology",
      degree: "Master's Degree Computer Expert",
      start: "2009",
      end: "2014",
    },
    {
      school: "Beijing Jiaotong University",
      degree: "Academic Exchange, Computer Science",
      start: "2012",
      end: "2013",
    },
  ],
  work: [
    {
      company: "TeamOut (YC W22)",
      link: "https://teamout.com",
      badges: ["Permanent", "Booking App", "CI/CD"],
      title: "Senior Web Engineer",
      start: "October 2024",
      end: "Present",
      description: (
        <>
          <span>
            Shipped end-to-end features—database to UI—for Teamout's complex booking app, accelerating product delivery. Owned and improved CI/CD
            pipelines, enabling reliable, fast releases with automated testing. Built and maintained three distinct surfaces: internal back-office,
            venue-manager portal, and multi-role customer app, ensuring consistent UX and robust role-based access.
          </span>
          <span>Strengthened code quality and performance via rigorous reviews, test automation, and incremental architecture upgrades.</span>
        </>
      ),
    },
    {
      company: "Photoroom",
      link: "https://photoroom.com",
      badges: ["Freelance", "B2B API", "Image editing"],
      title: "Senior Web Engineer",
      start: "March 2024",
      end: "October 2024",
      description: (
        <>
          <span>
            Owned maintenance, feature development, and 24/7 reliability of Photoroom's public image-transformation API serving enterprise clients.
            Improved the Node.js + Sharp processing pipeline for faster, higher-quality results while guaranteeing 100% uptime. Shipped new
            transformation features and versioning, expanding API capabilities to meet evolving customer needs.
          </span>
          <span>
            Boosted release confidence with thorough end-to-end tests and real-time performance monitoring. Enhanced an interactive API playground to
            streamline self-serve onboarding and power B2B sales demos.
          </span>
        </>
      ),
    },
    {
      company: "Reboom",
      link: "https://reboom.co",
      badges: ["SEO", "AI", "Lead Generation"],
      title: "CTO - Cofounder",
      start: "January 2023",
      end: "Present",
      description: (
        <>
          <span>
            At my current role, I'm deeply involved in architecting and developing robust and scalable applications, leveraging a suite of modern
            technologies. One of our key products is a SaaS app designed with Next.js and tRPC to ensure both optimal performance and ease of use. In
            parallel, I've spearheaded the creation of a blog generator, finely tuned with React Server Components and Next.js for seamless content
            delivery and performance.
          </span>
          <span>
            My workflow is supercharged by a DevOps ecosystem that includes AWS and Docker, focusing on CI/CD pipelines through Github Actions and
            CypressCI. For data management, I rely on Postgres paired with Prisma, while Postmark and Stripe handle our email and payment systems
            respectively. On the front-end, the experience is styled and animated using Tailwind and React, with Typescript ensuring code quality
            alongside Eslint and Prettier.
          </span>
          <span>
            Our codebase is hosted on GitHub, and we make extensive use of Vercel for deployment and analytics. Monitoring is done through Sentry, and
            OpenAI plays a part in some of our more advanced features. All these technologies are woven together in a seamless tapestry that lets us
            deliver high-quality products at scale.
          </span>
        </>
      ),
    },
    {
      company: "Dunniabs",
      title: "Freelance Web Developer",
      badges: ["Freelance", "Web3 developer", "Blockchain"],
      link: "https://dunniabs.com",
      start: "November 2022",
      end: "October 2024",
      description: (
        <>
          <span>
            At Dunniabs, I operate as a freelance specialist focused on helping companies navigate the exciting world of decentralized applications
            (dApps). I primarily work with MultiversX and Ethereum platforms, utilizing Next.js and tRPC to create performant and scalable solutions.
            For Ethereum-specific needs, I leverage Rainbow Kit to ensure smooth interactions with the blockchain, while MultiversX Kit serves as my
            go-to toolkit for projects on that network.
          </span>
          <span>
            I bring my experience in Web3 technologies to build applications that not only meet but exceed client expectations, delivering both
            utility and innovation. My goal is to assist companies in unlocking the full potential of blockchain, ensuring seamless transactions, and
            secure, transparent operations.
          </span>
        </>
      ),
    },
    {
      company: "Melba",
      title: "CTO",
      link: "https://melba.io",
      start: "December 2019",
      end: "November 2022",
      description: (
        <>
          <span>
            Melba is a web application which helps restaurants, caterers, and others to improve their margin and manage their inventories. I was
            responsible for improving and maintaining all of our products: landing page, application, and API.
          </span>
          <span>
            My role included making technical choices on the frontend, backend, and infrastructure, improving documentation, securing the app through
            testing, managing the sprint state and the team as a scrum master, and maintaining a scrum way of thinking.
          </span>
        </>
      ),
    },
    {
      company: "FoodMeUp",
      title: "Lead Web Developer",
      start: "February 2019",
      end: "December 2019",
      link: "https://melba.io",
      description: (
        <>
          <span>
            FoodMeUp is a web application which helps restaurants, caterers, and others to improve their margin and manage their inventories. I was
            responsible for improving and maintaining all of our products: landing page, application, and API.
          </span>
          <span>
            My role included making technical choices on the frontend, backend, and infrastructure, improving documentation, securing the app through
            testing, managing the sprint state and the team as a scrum master, and maintaining a scrum way of thinking.
          </span>
        </>
      ),
    },
    {
      company: "OuiCar",
      title: "Lead Web Developer",
      link: "https://turo.com/fr/fr",
      start: "July 2017",
      end: "September 2018",
      description: (
        <>
          <span>
            In my role at OuiCar, I led the transition of the legacy front/back stack from Zend MVC to a SPA architecture, shifted from a React/Redux
            stack to React/GraphQL, updated Webpack from v1 to v4, transitioned from Gulp to npm scripts, and managed a team of 5-6, among other
            responsibilities. My work was instrumental in modernizing the platform, which facilitates car rentals.
          </span>
          <span>
            I also introduced a new CI/CD pipeline with Docker and AWS, and improved the codebase with Eslint and Prettier, among other tasks. My work
            was instrumental in modernizing the platform, which facilitates car rentals.
          </span>
        </>
      ),
    },
    {
      company: "Shyft Cab",
      title: "Lead Web Developer",
      start: "January 2017",
      end: "July 2017",
      description:
        "At Shyft Cab, a live application for taxi services, I made key architecture decisions, refactored an Ionic 1 app with AngularJS to enhance performance and user experience, introduced Webpack as a builder, and improved scrum methodologies, managing a team of 2.",
    },
    {
      company: "PhotoBox",
      title: "Frontend Developer",
      link: "https://photobox.com",
      start: "January 2016",
      end: "January 2017",
      description:
        "My role at PhotoBox involved developing and updating web tools for clients to create personalized products. Tasks included code improvement and refactoring, feature implementation, updating tools for team efficiency, optimizing photo uploads, and adding tests.",
    },
    {
      company: "DCube",
      title: "Web Developer",
      link: "https://dcube.fr",
      start: "March 2014",
      end: "December 2015",
      description:
        "At DCube, I developed a back office with ASP.NET MVC 5, a management tool with ASP.NET MVC 4, maintained websites with ASP.NET MVC 3, developed a web app for Windows 8 with AngularJS, and integrated a Backbone application with Marionette framework.",
    },
    {
      company: "milibris",
      title: "Mobile Application Developer",
      start: "September 2013",
      end: "February 2014",
      description:
        "Developed mobile and tablet applications for iOS and Android platforms using homemade technology, CoffeeScript (Node.js), JAVA, and Objective-C, including applications for El-Pais, Q/R, and Figaro Magazine.",
    },
  ],
  skills: [
    "TypeScript",
    "Next.js",
    "Node.js",
    "React",
    "Remix",
    "tRPC",
    "Effect",
    "Blockchain",
    "AI",
    "AWS",
    "Prisma",
    "Stripe",
    "GraphQL",
    "WebRTC",
    "Docker",
    "Tailwind CSS",
    "Eslint",
    "Biomejs",
  ],
  projects: [
    {
      title: "Great War",
      techStack: ["MultiversX", "Next.js", "tRPC", "Prisma", "Vercel"],
      description: "A Web3 dApp to mine token using your Gnogen NFTs",
      link: {
        label: "Great War",
        href: "https://gng.gnogen.io",
      },
      image: GreatWarImage,
      videoPath: "/resources/projects/great-war-cover.mp4",
    },
    {
      title: "Melba",
      techStack: ["Next.js", "Symfony", "React", "Node.js", "Restaurants", "Heroku"],
      description: "An ERP for restaurants and caterers",
      link: {
        label: "Melba",
        href: "https://melba.io",
      },
      image: MelbaImage,
    },
    {
      title: "Reboom",
      techStack: ["AI", "Next.js", "Langchain", "tRPC", "Prisma", "AWS", "Vercel"],
      description: "A saas app to scale your inbound organic traffic",
      decommissioned: true,
      link: {
        label: "Reboom",
        href: "https://reboom.co",
      },
      image: ReboomImage,
    },
    {
      title: "Gnogons v2",
      techStack: ["MultiversX", "Next.js", "tRPC", "Prisma", "React server components", "Vercel"],
      description: "Experience the rebirth of legendary gnogons with our revamped trading website.",
      decommissioned: true,
      link: {
        label: "Gnogons v2",
        href: "https://gnogons.gnogen.io",
      },
      image: GnogonsImage,
      videoPath: "/resources/projects/gnogons-cover.mp4",
    },
    {
      title: "Rizen city",
      techStack: ["Ethereum", "Next.js", "Art", "Vercel"],
      description:
        "Rizen City is a next gen NFT project, with top of the line artwork, an established team, and utility that will truly bring more Web3 adoption to the space.",
      decommissioned: true,
      link: {
        label: "Rizen City",
        href: "https://rizencity.io/",
      },
      image: RizenCityImage,
    },
  ],
} as const;
