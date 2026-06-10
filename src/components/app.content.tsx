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
  },
} satisfies Dictionary;

export default appContent;
