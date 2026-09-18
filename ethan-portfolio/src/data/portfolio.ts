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
        "Python",
        "Next.js",
        "React",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "OpenAI",
        "Chrome Extension",
        "Tailwind CSS"
      ],

      github: "https://github.com/Ethant06/AI-Assistant-Chrome-Extension",
      image: "/pagepilot-library-cover.png",
      imageWidth: 1440,
      imageHeight: 810,

      featured: true,
    },

    {
      id: "biomedical-cnn",
      title: "Biomedical Image Classification",
      year: "2025",

      description:
        "CNN-based image classification experiments investigating limited-data biomedical datasets with different augmentation techniques.",

      technologies: [
        "Python",
        "PyTorch",
        "torchvision",
        "numpy",
        "scikit-learn",
        "matplotlib"
      ],

      github: "https://github.com/Ethant06/Cell-Classification",
      image: "/research.jpg",
      imageWidth: 1280,
      imageHeight: 1024,

      featured: false,
    },
  ],

  life: {
    collections: [
      {
        id: "photography",
        title: "Photography",
        featured: true,
        description:
          "I like to travel around the Pacific Northwest to take pictures and enjoy Washington's landscapes",
        photos: [
          {
            src: "/photography.jpeg",
            width: 4284,
            height: 5712,
            alt: "Ethan photographing a grassy field under a blue sky",
          },
        ],
      },

      {
        id: "swimming",
        title: "Swimming",
        featured: false,
        description:
          "I grew up swimming competitively throughout middle school and highschool. I ended my journey by making Washington State Championship Finals in the 100 fly.",
        photos: [
          {
            src: "/swimming.jpg",
            width: 1536,
            height: 1024,
            alt: "Ethan swimming butterfly in a competitive pool",
          },
        ],
      },

      {
        id: "hiking",
        title: "Hiking",
        featured: false,
        description:
          "I like hiking around the mountains and lakes of the Pacific Northwest whenever I can get outside.",
        photos: [
          {
            src: "/hiking.jpeg",
            width: 4032,
            height: 3024,
            alt: "Ethan at an alpine lake in the Pacific Northwest",
          },
        ],
      },
    ],
  },
} as const