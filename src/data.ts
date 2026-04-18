import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Senzo Earl Maseko",
    title: "Full-Stack Web Developer",
    email: "senzo.e.maseko@gmail.com",
    phone: "067 009 6294",
    location: "Nelspruit, South Africa",
    github: "github.com/SenzoEarl",
    linkedin: "linkedin.com/in/masekose/",
    summary: "Full-Stack Web Developer with 7+ years of project-based experience (2018–present) building, deploying, and maintaining modern web applications. Skilled in frontend frameworks, including Vue 3, Nuxt 4, and React, alongside backend development using Python and Django. Proven ability to design and deploy scalable applications using Docker, CI/CD pipelines, and cloud platforms. Strong focus on performance, security, and real-world application delivery."
  },
  skillGroups: [
    {
      category: "Frontend",
      skills: ["Vue 3", "Nuxt 4", "React 18", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      skills: ["Python", "Django", "Django REST Framework (DRF)", "PostgreSQL", "SQLite", "ORM"]
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Docker Compose", "Nginx", "Gunicorn", "GitHub Actions", "Azure", "Railway", "AWS Elastic Beanstalk", "GHCR"]
    },
    {
      category: "Security & Core Concepts",
      skills: ["SSL/TLS", "HSTS", "Bandit", "REST APIs", "Jamstack", "SSG", "Secure Coding", "Unit Testing"]
    }
  ],
  experience: [
    {
      role: "Cybersecurity Analyst Intern",
      company: "ZaWit",
      location: "Nelspruit, South Africa",
      period: "Sep 2025 – Present",
      description: [
        "Analysed system and network logs to identify vulnerabilities affecting web systems",
        "Collaborated with IT teams to improve system security and patch management",
        "Applied security best practices relevant to web applications and data protection"
      ]
    },
    {
      role: "Freelance Full-Stack Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2018 – Present",
      description: [
        "Built and deployed 8+ web applications using Vue 3, React, and Django",
        "Implemented CI/CD pipelines, Docker containers, and cloud deployments on Azure/AWS",
        "Managed end-to-end project delivery for small businesses and personal projects",
        "Successfully delivered a real client business site for Msotho Mswati Trading in 2018"
      ]
    },
    {
      role: "Junior Software Developer",
      company: "Risisi",
      location: "Nelspruit, South Africa",
      period: "May 2019 – Dec 2019",
      description: [
        "Developed responsive web applications using HTML, CSS, and JavaScript",
        "Designed and implemented UI/UX solutions for business systems",
        "Maintained databases and supported backend functionality",
        "Participated in debugging, testing, and feature implementation"
      ]
    }
  ],
  education: [
    {
      degree: "Diploma in ICT in Application Development",
      institution: "University of Mpumalanga",
      location: "Nelspruit, South Africa",
      period: "Feb 2015 – Nov 2017"
    },
    {
      degree: "National Senior Certificate",
      institution: "Sitintile Senior Secondary School",
      location: "Kanyamazane, South Africa",
      period: "Jan 2012 – Dec 2014"
    }
  ],
  projects: [
    {
      title: "Homagine",
      description: "Live Jamstack Application (Flagship Project). Content-driven static site with markdown-based CMS.",
      techStack: ["Nuxt 4", "Vue 3", "Tailwind CSS", "@nuxt/content", "TypeScript", "GitHub Actions"],
      liveUrl: "https://senzoearl.github.io/homagine/",
      githubUrl: "https://github.com/SenzoEarl/homagine",
      year: "2025",
      highlights: [
        "Implemented Static Site Generation (SSG) for high performance",
        "Integrated markdown-based content management",
        "Configured automated GitHub Actions deployment pipeline",
        "Resolved production issues such as 404 errors through route pre-rendering"
      ]
    },
    {
      title: "Blognificent",
      description: "Production-Ready Django Platform. Full-featured blog platform with REST API, tagging, and comments.",
      techStack: ["Django 5.2", "DRF", "Docker", "Nginx", "Gunicorn", "PostgreSQL", "GitHub Actions", "SSL/TLS", "HSTS"],
      githubUrl: "https://github.com/SenzoEarl/blognificent",
      year: "2025",
      highlights: [
        "Containerised application using Docker Compose (Django + Nginx + Gunicorn)",
        "Implemented CI/CD pipelines for testing, linting, and Docker image deployment",
        "Applied security best practices including HSTS and environment-based configuration",
        "Designed a scalable backend architecture suitable for cloud deployment"
      ]
    },
    {
      title: "LEARNINADE-docker",
      description: "Multi-app Django platform with chat, students, and edufy modules.",
      techStack: ["Django", "Docker Compose", "Bootstrap", "Azure Pipelines", "Railway", "Gunicorn"],
      githubUrl: "https://github.com/SenzoEarl/LEARNINADE-docker",
      year: "2023",
      highlights: [
        "Environment-aware settings and service readiness checks",
        "Deployed to Azure via GitHub Actions and Railway"
      ]
    },
    {
      title: "NEWSLEE",
      description: "Content Management System for managing and displaying news content.",
      techStack: ["Django", "Azure", "PostgreSQL"],
      githubUrl: "https://github.com/SenzoEarl/NEWSLEE",
      year: "2024",
      highlights: [
        "Implemented content categorisation and structured data handling",
        "Integrated cloud-based CI/CD workflows"
      ]
    }
  ],
  certificates: [
    {
      name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
      issuer: "Microsoft"
    },
    {
      name: "IBM Mobile Application Developer Mastery Award",
      issuer: "IBM"
    },
    {
      name: "FreeCodeCamp: Responsive Web Design",
      issuer: "FreeCodeCamp"
    }
  ]
};
