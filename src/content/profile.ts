import type { PortfolioProfile } from "./types";

const profile: PortfolioProfile = {
  name: "Sahil Teltumde",
  siteTitle: "Sahil Teltumde Portfolio",
  initials: "ST",
  hero: {
    greeting: "Hi, I'm Sahil Teltumde.",
    headline:
      "MCA student building Python applications and a local RAG teaching assistant.",
    summary:
      "Data Science and GenAI-focused MCA student with hands-on experience building Python applications and a local RAG teaching assistant using Whisper, Ollama, BGE-M3, and semantic retrieval. Skilled in Python, SQL, pandas, scikit-learn and Flask; seeking a Data Science, Machine Learning, or GenAI internship.",
  },
  resumeFile: "Sahil_Teltumde_resume.pdf",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/sahil-teltumde",
    github: "https://github.com/Sahil-1727",
  },
  about: {
    location: "Nagpur, Maharashtra, India",
    role: "MCA Student",
    gpa: "Current CGPA, 9.7 / 10.0",
    graduation: "Expected Graduation, 2027",
    experience: [
      {
        title: "Freelance Backend Developer, Remote Client Project: PG Finder",
        period: "June 2026",
        location: "Remote",
        highlights: [
          "Designed and delivered a full-stack Paying Guest discovery platform for a local client using Python and Flask.",
          "Architected a PostgreSQL database to securely manage property listings, tenant details, and availability status.",
        ],
      },
    ],
    education: [
      {
        degree: "Master of Computer Applications (MCA)",
        period: "Expected 2027",
        institution:
          "GH Raisoni College of Engineering and Management, Nagpur, Maharashtra",
        detail: "Current CGPA: 9.7 / 10.0",
      },
      {
        degree: "Bachelor of Computer Application (BCA)",
        period: "Graduated 2025",
        institution: "Santaji Mahavidyalaya, Nagpur, Maharashtra",
        detail: "Percentage: 82.25%",
      },
    ],
  },
  skillGroups: [
    {
      id: "languages",
      title: "Languages",
      skills: ["Python", "Java", "SQL"],
    },
    {
      id: "datascience",
      title: "Data Science & ML",
      skills: [
        "Pandas",
        "NumPy",
        "scikit-learn",
        "Matplotlib",
        "Seaborn",
        "TensorFlow",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Beautiful Soup",
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks",
      skills: ["Flask"],
    },
    {
      id: "databases",
      title: "Databases & APIs",
      skills: [
        "PostgreSQL (Neon)",
        "MySQL",
        "REST APIs",
        "Brevo API",
        "OpenRouteService API",
        "Postman",
      ],
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      skills: [
        "Jupyter Lab",
        "PyCharm",
        "MySQL Workbench",
        "Google Colab",
        "Git/GitHub",
        "Render",
      ],
    },
    {
      id: "concepts",
      title: "Core Concepts",
      skills: ["DSA", "OOP", "DBMS", "DevOps and CI/CD fundamentals"],
    },
  ],
  projects: [
    {
      id: "housePricePredictor",
      title: "Bangalore House Price Predictor",
      type: "Machine Learning",
      description:
        "Built an end-to-end ML pipeline using Random Forest Regressor with median imputation, standard scaling, and one-hot encoding via sklearn's ColumnTransformer. Evaluated with 10-fold cross-validation and deployed as a Flask REST API with a /predict endpoint serving real-time predictions from JSON input.",
      tech: ["Python", "scikit-learn", "Flask", "REST API", "joblib"],
      link: "https://github.com/Sahil-1727/bangalore-house-price-predictor",
    },
    {
      id: "ragAssistant",
      title: "Local RAG AI Assistant for Educational Video Content",
      type: "GenAI / RAG",
      description:
        "Constructed an offline pipeline to extract audio from lecture videos, generating Hindi transcriptions via Whisper with timestamped metadata. Produced BGE-M3 embeddings through Ollama and engineered cosine similarity search to power grounded Llama 3.2 responses with video titles and exact timestamp references.",
      tech: ["Python", "Whisper", "Ollama", "BGE-M3", "Llama 3.2", "scikit-learn", "Pandas", "FFmpeg"],
      link: "https://github.com/Sahil-1727/Rag-Based-AI-Teaching-Assistant",
    },
    {
      id: "devtrack",
      title: "DevTrack: Internship Application Tracker",
      type: "Full Stack",
      description:
        "Developed and deployed a full-stack internship tracker to Render in 15 days using 4 Flask blueprints and SQLAlchemy ORM. Engineered a secure REST API with Bearer token authentication and implemented dynamic search, filtering, pagination, and Chart.js visualizations across 100+ records.",
      tech: ["Flask", "PostgreSQL", "SQLAlchemy", "REST API", "Chart.js"],
      link: "https://github.com/Sahil-1727/devtrack",
      liveLink: "https://devtrack-fjw4.onrender.com/",
    },
    {
      id: "queueSystem",
      title: "Digital Queue Management System",
      type: "SaaS Platform",
      description:
        "Developed a multi-tenant SaaS queue platform for clinics, integrating the OpenRouteService API for live tracking and automating queue-position email notifications via the Brevo API.",
      tech: ["Python", "Flask", "SQL", "OpenRouteService API", "Brevo API"],
      link: "https://github.com/Sahil-1727/digital-queue-management-system",
      liveLink: "https://digital-queue-management-system-1.onrender.com",
    },
  ],
  contact: {
    introduction:
      "I am open to Data Science, Machine Learning, and GenAI internship opportunities.",
    email: "sahilteltumde27@gmail.com",
    formSubject: "New message from Sahil Teltumde Portfolio",
  },
};

export default profile;
