import { t, type Dictionary } from "intlayer";

const appContent = {
  key: "app",
  content: {
    headerText: t({
      en: {
        eduction: "Education",
        experience: "Experience",
        about: "About Me",
        projects: "Projects",
        contact: "Contact Me",
      },
      fr: {
        eduction: "Education",
        experience: "Expérience",
        about: "A propos",
        projects: "Projets",
        contact: "Contact",
      },
      es: {
        eduction: "Formación",
        experience: "Experiencia laboral",
        about: "Sobre mí",
        projects: "Proyectos",
        contact: "Contacto",
      },
    }),
    heroText: t({
      en: {
        greet: "Him I'm",
        desc: `Cybersecurity graduate and software developer passionate about
              building secure, reliable, and impactful solutions. With
              experience spanning cybersecurity, networking, systems
              programming, and full-stack development, I enjoy tackling complex
              technical challenges and turning ideas into practical
              applications.`,
        hire: "Available",
        download: "Download resume",
        resume: "resume.pdf",
      },
      fr: {
        greet: "Bonjour, je suis",
        desc: `Diplômé en cybersécurité et développeur logiciel, je suis passionné par la création de solutions sécurisées, performantes et utiles. Grâce à une expérience en cybersécurité, réseaux, programmation système et développement full-stack, j'aime relever des défis techniques complexes et donner vie à des projets concrets qui ont un réel impact.`,
        hire: "Disponible",
        download: "Télécharger CV",
        resume: "cv.pdf",
      },
      es: {
        greet: "Hola, soy",
        desc: `Graduado en ciberseguridad y desarrollador de software, me apasiona crear soluciones seguras, eficientes y con impacto real. Gracias a mi experiencia en ciberseguridad, redes, programación de sistemas y desarrollo full-stack, disfruto enfrentándome a retos técnicos complejos y transformando ideas en proyectos prácticos y funcionales.`,
        hire: "Disponible",
        download: "Descargar Currículo",
        resume: "curriculo.pdf",
      },
    }),
    educationText: t({
      en: {
        title: "Education",
        path: "Learning Path",

        1: {
          id: 1,
          degree: "Masters in Computer Science & Cybersecurity",
          institution: "Cy Tech - Cergy",
          duration: "2022-2025",
          details:
            "Specialized in Cybersecurity, Networking and Software Engineering",
          remark: "Academic Excellence",
        },
        2: {
          id: 2,
          degree: "Bachelors of Science",
          institution: "Gustave Eiffel - Dijon",
          duration: "2020-2022",
          details: "Selected for a competitive engineering program",
          remark: "Academic Excellence",
        },
        3: {
          id: 3,
          degree: "General Baccalaureate",
          institution: "Gustave Eiffel - Dijon",
          duration: "2017-2020",
          details: "Admission to a highliy selective CPGE program",
          remark: "Academic Excellence",
        },
      },
      fr: {
        title: "Education",
        path: "Parcours Scolaire",

        1: {
          id: 1,
          degree: "Ingénieur Informatique",
          institution: "Cy Tech - Cergy",
          duration: "2022-2025",
          details:
            "Spécialisation en Cybersécurité, Réseaux et Développement Logiciel",
          remark: "Excellence Académique",
        },
        2: {
          id: 2,

          degree: "Classe Préparatoire aux Grandes Écoles",
          institution: "Gustave Eiffel - Dijon",
          duration: "2020-2022",
          remark: "Excellence Académique",
          details: "Admission en Grande École d'Ingénieur",
        },
        3: {
          id: 3,

          degree: "Baccalauréat Général Scientifique",
          institution: "Gustave Eiffel - Dijon",
          duration: "2017-2020",
          remark: "Excellence Académique",
          details: "Admission en Classe Préparatoire aux Grandes Écoles",
        },
      },
      es: {
        title: "Formación",
        path: "Trayectoria académica",

        1: {
          id: 1,

          degree: "Ingeniería Informática",
          institution: "CY Tech - Cergy",
          duration: "2022-2025",
          details:
            "Especialización en Ciberseguridad, Redes y Desarrollo de Software",
          remark: "Excelencia Académica",
        },
        2: {
          id: 2,
          title: "Education",
          degree: "Programa Preparatorio para Grandes Escuelas",
          institution: "Gustave Eiffel - Dijon",
          duration: "2020-2022",
          details: "Admisión a una Escuela Superior de Ingeniería",
          remark: "Excelencia Académica",
        },
        3: {
          id: 3,
          degree: "Bachillerato General Científico",
          institution: "Gustave Eiffel - Dijon",
          duration: "2017-2020",
          details:
            "Admisión al Programa Preparatorio para Grandes Escuelas de Ingeniería",
          remark: "Excelencia Académica",
        },
      },
    }),
    experienceText: t({
      en: {
        skillsTitle: ["Technical", "Skills"],
        jobsTitle: ["Work", "Experience"],
        1: {
          id: 1,
          role: "Software Engineer",
          company: "GE Healthcare",
          date: "Jul 2025 - Dec 2025",
        },
        2: {
          id: 2,
          role: "FullStack Developer",
          company: "Kwyk",
          date: "Jun 2023 - Jul 2025",
        },
      },
      fr: {
        skillsTitle: ["Compétences", "Techniques"],
        jobsTitle: ["Expérience", "Professionnelle"],
        1: {
          id: 1,
          role: "Développeur Logiciel",
          company: "GE Healthcare",
          date: "Jul 2025 - Dec 2025",
        },
        2: {
          id: 2,
          role: "Développeur FullStack",
          company: "Kwyk",
          date: "Jun 2023 - Jul 2025",
        },
      },
      es: {
        skillsTitle: ["Competencias", "Técnicas"],
        jobsTitle: ["Experiencia", "Laboral"],
        1: {
          id: 1,
          role: "Desarrollador de Software",
          company: "GE Healthcare",
          date: "Jul 2025 - Dec 2025",
        },
        2: {
          id: 2,
          role: "Desarrollador FullStack",
          company: "Kwyk",
          date: "Jun 2023 - Jul 2025",
        },
      },
    }),
  },
} satisfies Dictionary;

export default appContent;
