// src/data/portfolio.ts

export const portfolio = {

  experience: [
    {
      id: "uw-advancement",
      role: "IT HelpDesk Student Technician",
      organization: "University of Washington Advancement",
      location: "Seattle, WA",
      startDate: "August 2026",
      endDate: "Present"
    },

    {
      id: "bagheri-lab",
      role: "Undergraduate Machine Learning Researcher",
      organization: "Bagheri Lab",
      institution: "University of Washington",
      location: "Seattle, WA",
      startDate: "May 2025",
      endDate: "May 2026"
    },

    {
      id: "ipd",
      role: "IT Student Assistant",
      organization: "Institute for Protein Design @ University of Washington",
      location: "Seattle, WA",
      startDate: "June 2025",
      endDate: "October 2025"
    },

    {
      id: "fwps",
      role: "IT Intern",
      organization: "FWPS",
      location: "Federal Way, WA",
      startDate: "June 2024",
      endDate: "August 2024"
    },

    {
      id: "tutoring",
      role: "Calculus Tutor",
      organization: "Highline College",
      location: "Des Moines, WA",
      startDate: "October 2023",
      endDate: "June 2024"
    }
  ],

  projects: [
    {
      id: "knowledge-base",
      title: "RAG-Powered Research Knowledge App w/ Chrome Extension",
      year: "2026",

      description:
        "A full-stack research assistant for saving documents, asking questions over personal knowledge, and interacting with webpages through a Chrome extension.",

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "OpenAI",
        "Chrome Extension",
      ],

      github: "",
      demo: "",
      image: "/images/knowledge-base.png",

      featured: true,
    },

    {
      id: "biomedical-cnn",
      title: "Biomedical Image Classification",
      year: "2025",

      description:
        "CNN-based image classification experiments investigating limited-data biomedical datasets.",

      highlights: [],

      technologies: [
        "Python",
        "PyTorch",
        "Machine Learning",
      ],

      github: "",
      demo: "",
      image: "/images/cnn-project.png",

      featured: false,
    },
  ],

  life: [
    {
      id: "swimming",
      title: "Swimming",
      description:
        "Time away from the keyboard usually means getting in the water.",
      image: "/images/swimming.jpg",
    },

    {
      id: "hackathons",
      title: "Hackathons",
      description:
        "Building, experimenting, and meeting other people who love creating things.",
      image: "/images/hackathon.jpg",
    },
  ],
} as const