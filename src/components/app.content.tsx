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
  },
} satisfies Dictionary;

export default appContent;
