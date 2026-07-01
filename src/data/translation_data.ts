export const translations = {
  fr: {
    nav: {
      home: "ACCUEIL",
      about: "À PROPOS",
      skills: "COMPÉTENCES",
      projects: "PROJETS",
      contact: "CONTACT",
      cv: "TÉLÉCHARGER CV"
    },
    hero: {
      introduction: "Bonjour, je suis",
      nom: "RICHARTS Mihasiniaina Andrews Ravalo",
      subtitle: "Développeur full stack avec une vraie affinité pour le backend en Python. J'aime aborder les problèmes sous un angle créatif et trouver des solutions qui sortent un peu du cadre.",
      nindo: [
        "Je repousse mes limites, avec l'IA comme alliée",
        "Viser haut sans jamais quitter la route des yeux",
        "L'ambition est universelle, seul l'acte fait la différence"
      ],
      stats: [
        { value: "+3", label: "Années Exp." },
        { value: "12", label: "Projets" }
      ]
    },
    about: {
      badge: "À propos",
      title: "Développeur full stack orienté backend avec FastAPI",
      text1: "Développeur full stack depuis 3 ans, je suis surtout à l'aise côté backend avec Python. Curieux de nature, j'aime autant explorer de nouvelles technologies qu'approfondir celles que je maîtrise déjà. L'IA fait partie de mon flux de travail, comme un outil parmi d'autres — jamais comme une béquille.",
      stats: [
        { value: "3+", label: "ANNÉES D'EXPÉRIENCE" },
        { value: "12", label: "PROJETS PERSONNELS & EN ÉQUIPE" },
        { value: "4+", label: "STACKS TECHNIQUES MAÎTRISÉES" },
        { value: "∞", label: "CURIOSITÉ" }
      ],
      paragraphs: {
        intro: "Je m'appelle Richarts Mihasiniaina Andrews Ravalo. Je suis développeur fullstack, plutôt branché backend, avec une vraie spécialisation en Python et un fort intérêt pour l'intelligence artificielle — un domaine que je pratique aussi bien comme expertise que comme outil au quotidien.",
        chain: "Du backend en Python et Express aux interfaces React et Next.js, en passant par les bases de données, Docker et le déploiement, je touche à toute la chaîne de production.",
        approach: "Ma façon de travailler : du code propre, des solutions un peu créatives, et l'IA comme appui constant.",
        ai: "Je pratique le vibecoding et j'intègre l'IA directement dans mon développement — automatisation de workflows, intégration de modèles — mais je m'intéresse aussi de près aux LLM appliqués, en particulier aux architectures RAG (Retrieval-Augmented Generation), pour construire des assistants qui s'appuient réellement sur des bases de connaissances."
      },
      skills: [
        {
          title: "Backend Python",
          desc: "Je conçois des APIs robustes et scalables avec FastAPI et Flask, en clean architecture, pensées pour rester maintenables sur la durée."
        },
        {
          title: "RAG & IA",
          desc: "LLM appliqués via Retrieval-Augmented Generation : embeddings, LangChain, LlamaIndex — pour des assistants qui répondent juste, ancrés dans le contexte."
        },
        {
          title: "Algorithmique",
          desc: "Une bonne maîtrise des structures de données et des algorithmes, avec une vraie capacité à analyser et résoudre des problèmes."
        },
        {
          title: "Fullstack Web",
          desc: "Des interfaces modernes en React, Next.js, TypeScript et TailwindCSS, connectées à des backends Python et Express performants."
        },
        {
          title: "Docker & Devcontainer",
          desc: "Conteneurisation avec Docker et devcontainers, pour des environnements de dev cohérents et un déploiement simplifié."
        },
        {
          title: "Approche créative",
          desc: "Je transforme des problèmes complexes en solutions élégantes — du code lisible, maintenable, et qui a un vrai impact."
        }
      ]
    },
    skills: {
      title: "ARSENAL TECHNIQUE",
      badge: "Compétences",
      heading: {
        line1: "Un réseau de technologies,",
        line2: "un seul fil conducteur"
      },
      arsenal: {
        eyebrow: "Mon arsenal",
        title: "Voici les outils avec lesquels je construis mes projets",
        text: "Python et FastAPI sont au cœur de mon flux de travail, entourés d'un écosystème frontend moderne, de bases de données relationnelles et vectorielles, et de tout ce qu'il faut pour livrer du code propre jusqu'en production."
      },
      stacks: [
        { label: "Backend", detail: "Python, FastAPI, Node.js, Express, C#/.NET" },
        { label: "Frontend", detail: "React, Next.js, TypeScript, TailwindCSS" },
        { label: "Données", detail: "PostgreSQL, MySQL, SQLite, Qdrant" },
        { label: "Outils", detail: "Docker, GitHub" }
      ]
    },
    projects: {
      badge: "Projets",
      titleLine1: "Mes",
      titleLine2: "projets",
      description: "Une sélection de mes réalisations les plus marquantes et enrichissantes. Chaque application représente un défi technique ciblé, combinant clean code, performance et résolution de problèmes complexes.",
      viewProject: "Voir le code",
      privateCode: "Code privé",
      items: [
        {
          id: "safait",
          title: "SafAIT",
          desc: "Assistant conversationnel prototypé chez I-Princept, s'appuyant sur une architecture RAG (Retrieval-Augmented Generation) pour l'interrogation sémantique d'archives techniques. Recherche vectorielle via pgvector, conçu comme preuve de concept pour valider la pertinence de l'approche avant passage à l'échelle.",
          type: "Fullstack",
          context: "Stage — I-Princept"
        },
        {
          id: "aink",
          title: "AINK",
          desc: "Plateforme B2B mettant en relation fournisseurs et collecteurs du secteur agricole, avec messagerie temps réel intégrée. Architecture backend conçue selon les principes de Clean Architecture (séparation des responsabilités par couches) pour garantir maintenabilité et évolutivité du système.",
          type: "Backend",
          context: "Personnel"
        },
        {
          id: "izaro",
          title: "Izar'o",
          desc: "Réseau social anonyme conçu pour la liberté d'expression, avec une architecture pensée pour garantir la confidentialité des utilisateurs (dissociation identité/contenu). Développé dans le cadre de la compétition interne de LENI Fianarantsoa.",
          type: "Fullstack",
          context: "Compétition — LENI Fianarantsoa"
        },
        {
          id: "portfolio",
          title: "Portfolio",
          desc: "Site vitrine personnel présentant mon parcours et mes réalisations, avec une attention particulière portée à l'expérience utilisateur : animations fluides, architecture de composants modulaire et code maintenable.",
          type: "Frontend",
          context: "Personnel"
        }
      ]
    },
    contact: {
      badge: "Contact",
      titleNormal: "Travaillons",
      titleAccent: "ensemble",
      description: "Si vous avez trouvé mon profil intéressant, que vous ayez une opportunité précise, un défi technique complexe à relever ou simplement une idée innovante à concevoir, n'hésitez pas à me laisser un message. Discutons-en pour concrétiser vos objectifs.",
      
      // Coordonnées factices ajoutées
      phoneValue: "+261 34 00 000 00",
      emailValue: "votre.nom@gmail.com",
      linkedinValue: "linkedin.com/in/votre-nom",

      labelUsername: "Nom d'utilisateur / Nom",
      placeholderUsername: "Ex: Andrews Richarts",
      labelObjective: "Objectif",
      placeholderObjective: "Ex: Création d'une API RAG, Application Web...",
      labelDescription: "Description du projet",
      placeholderDescription: "Détaillez brièvement votre besoin, le contexte ou les technologies souhaitées...",
      send: "Envoyer le message"
    }
  },
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      skills: "SKILLS",
      projects: "PROJECTS",
      contact: "CONTACT",
      cv: "DOWNLOAD CV"
    },
    hero: {
      introduction: "Hello, I am",
      nom: "RICHARTS Mihasiniaina Andrews Ravalo",
      subtitle: "Full stack developer with a real affinity for backend work in Python. I like approaching problems creatively and finding solutions that go a bit off the beaten path.",
      nindo: [
        "I push past my limits, with AI as my ally",
        "Aim high, never lose sight of the road",
        "Ambition is universal, only action sets you apart"
      ],
      stats: [
        { value: "+3", label: "Years Exp." },
        { value: "12", label: "Projects" }
      ]
    },
    about: {
      badge: "About",
      title: "Full stack developer focused on backend with FastAPI",
      text1: "Full stack developer for 3 years, I'm most at home on the backend side with Python. Naturally curious, I'm always keen to explore new technologies while going deeper into the ones I already know well. AI is part of my workflow — a tool I lean on, never a crutch.",
      stats: [
        { value: "3+", label: "YEARS OF EXPERIENCE" },
        { value: "12", label: "PERSONAL & TEAM PROJECTS" },
        { value: "4+", label: "TECH STACKS MASTERED" },
        { value: "∞", label: "CURIOSITY" }
      ],
      paragraphs: {
        intro: "I'm Richarts Mihasiniaina Andrews Ravalo, a fullstack developer leaning toward backend, with a strong specialization in Python and a genuine interest in artificial intelligence — a field I practice both as an area of expertise and as a daily tool.",
        chain: "From Python and Express backends to React and Next.js interfaces, through databases, Docker and deployment, I cover the whole production chain.",
        approach: "My approach: clean code, a bit of creative thinking, and AI as a constant support.",
        ai: "I practice vibecoding and weave AI directly into my development work — workflow automation, model integration — and I'm also drawn to applied LLMs, especially RAG (Retrieval-Augmented Generation) architectures, to build assistants that are genuinely grounded in real knowledge bases."
      },
      skills: [
        {
          title: "Backend Python",
          desc: "I design robust, scalable APIs with FastAPI and Flask, following clean architecture, built to stay maintainable over time."
        },
        {
          title: "RAG & AI",
          desc: "Applied LLMs via Retrieval-Augmented Generation: embeddings, LangChain, LlamaIndex — for contextual assistants that actually answer accurately."
        },
        {
          title: "Algorithms",
          desc: "Solid command of data structures and algorithms, with real analytical and problem-solving skills."
        },
        {
          title: "Fullstack Web",
          desc: "Modern interfaces in React, Next.js, TypeScript and TailwindCSS, connected to performant Python and Express backends."
        },
        {
          title: "Docker & Devcontainer",
          desc: "Containerizing apps with Docker and devcontainers, for consistent dev environments and straightforward deployment."
        },
        {
          title: "Creative Approach",
          desc: "I turn complex problems into elegant solutions — readable, maintainable code with real impact."
        }
      ]
    },
    skills: {
      title: "TECHNICAL ARSENAL",
      badge: "Skills",
      heading: {
        line1: "A network of technologies,",
        line2: "one common thread"
      },
      arsenal: {
        eyebrow: "My arsenal",
        title: "Here are the tools I use to build my projects",
        text: "Python and FastAPI sit at the heart of my workflow, surrounded by a modern frontend ecosystem, relational and vector databases, and everything needed to ship clean code all the way to production."
      },
      stacks: [
        { label: "Backend", detail: "Python, FastAPI, Node.js, Express, C#/.NET" },
        { label: "Frontend", detail: "React, Next.js, TypeScript, TailwindCSS" },
        { label: "Data", detail: "PostgreSQL, MySQL, SQLite, Qdrant" },
        { label: "Tools", detail: "Docker, GitHub" }
      ]
    },
    projects: {
      badge: "Projects",
      titleLine1: "My",
      titleLine2: "projects",
      description: "A selection of my most notable and rewarding work. Each application represents a focused technical challenge, combining clean code, performance and complex problem solving.",
      viewProject: "View code",
      privateCode: "Private code",
      items: [
        {
          id: "safait",
          title: "SafAIT",
          desc: "Conversational assistant prototyped at I-Princept, built on a RAG (Retrieval-Augmented Generation) architecture for semantic search over technical archives. Vector search powered by pgvector, designed as a proof of concept to validate the approach before scaling.",
          type: "Fullstack",
          context: "Internship — I-Princept"
        },
        {
          id: "aink",
          title: "AINK",
          desc: "B2B platform connecting suppliers and collectors in the agricultural sector, with built-in real-time messaging. Backend architecture designed around Clean Architecture principles (layered separation of concerns) to ensure maintainability and scalability.",
          type: "Backend",
          context: "Personal"
        },
        {
          id: "izaro",
          title: "Izar'o",
          desc: "Anonymous social network built around freedom of expression, with an architecture designed to protect user confidentiality (identity/content separation). Built for LENI Fianarantsoa's internal competition.",
          type: "Fullstack",
          context: "Competition — LENI Fianarantsoa"
        },
        {
          id: "portfolio",
          title: "Portfolio",
          desc: "Personal showcase site presenting my background and work, with close attention to user experience: smooth animations, modular component architecture and maintainable code.",
          type: "Frontend",
          context: "Personal"
        }
      ]
    },
    contact: {
      badge: "Contact",
      titleNormal: "Let's work",
      titleAccent: "together",
      description: "If you found my profile interesting, whether you have a specific opportunity, a complex technical challenge to solve, or simply an innovative idea to design, feel free to leave me a message. Let's discuss it to turn your goals into reality.",
      
      // Coordonnées factices ajoutées
      phoneValue: "+261 34 00 000 00",
      emailValue: "your.name@gmail.com",
      linkedinValue: "linkedin.com/in/your-name",

      labelUsername: "Username / Name",
      placeholderUsername: "e.g., Andrews Richarts",
      labelObjective: "Objective",
      placeholderObjective: "e.g., Building a RAG API, Web Application...",
      labelDescription: "Project Description",
      placeholderDescription: "Briefly detail your needs, the context, or the desired tech stack...",
      send: "Send message"
    }
  }
};

export type Language = 'fr' | 'en';