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
        greet: "Hi I'm",
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
    aboutText: t({
      en: {
        title: ["About", "Me"],
        desc: `Cybersecurity graduate and software developer with a strong interest
            in network security, systems programming, and web technologies. I
            enjoy building practical solutions, exploring how systems work at a
            low level, and applying technical knowledge to solve real-world
            challenges. My work spans cybersecurity research, full-stack
            development, networking, and Linux-based environments.`,
        competences: ["Spoken Languages", "Projects", "Years of Experience"],
      },
      fr: {
        title: ["A", "Propos"],
        desc: "Diplômé en cybersécurité et développeur logiciel, je m'intéresse particulièrement à la sécurité des réseaux, à la programmation système et aux technologies web. J'apprécie concevoir des solutions concrètes, comprendre le fonctionnement des systèmes à bas niveau et mettre mes compétences techniques au service de problématiques réelles. Mon expérience couvre la recherche en cybersécurité, le développement full-stack, les réseaux et les environnements Linux.",
        competences: ["Langues Parlées", "Projets", "Années d'Expérience"],
      },
      es: {
        title: ["Sobre", "Mí"],
        desc: "Graduado en ciberseguridad y desarrollador de software, tengo un gran interés por la seguridad de redes, la programación de sistemas y las tecnologías web. Disfruto creando soluciones prácticas, comprendiendo el funcionamiento interno de los sistemas y aplicando mis conocimientos técnicos para resolver problemas reales. Mi experiencia abarca la investigación en ciberseguridad, el desarrollo full-stack, las redes y los entornos basados en Linux.",
        competences: ["Idiomas", "Proyectos", "Años de Experiencia"],
      },
    }),
    projectsText: t({
      en: {
        1: {
          title: "Network Configuration and Security",
          desc: "Designed and implemented a series of networking labs using Cisco Packet Tracer to develop practical experience in network administration, configuration, and security. The project involved configuring and troubleshooting Standard and Extended Access Control Lists (ACLs), Cisco Discovery Protocol (CDP), Dynamic Trunking Protocol (DTP), VLAN Trunking Protocol (VTP), Spanning Tree Protocol (STP), firewall rules, and site-to-site IPSec VPNs. Through these labs, I gained hands-on experience in network segmentation, traffic filtering, VLAN management, switch and router configuration, loop prevention, secure remote connectivity, and network troubleshooting, while applying industry-standard networking protocols and security practices in simulated enterprise environments.",
        },
        2: {
          title: "Raspberry Homelab & Secure Remote Access Infrastructure",
          desc: "Designed and deployed a Raspberry Pi-based homelab environment to host and manage self-hosted network services within a Linux infrastructure. Configured secure VPN connectivity to provide encrypted remote access to internal resources from external networks while maintaining strong security controls. Implemented network tunneling solutions to securely expose selected services to the Internet, reducing the public attack surface through controlled access mechanisms. Managed system administration tasks including network routing, firewall configuration, service deployment, and remote infrastructure management. This project provided practical experience in self-hosted infrastructure, VPN technologies, secure remote access architectures, Linux administration, and network security best practices.",
        },
        3: {
          title: "Cy Path - Board Game",
          desc: "Designed and developed a turn-based multiplayer board game in Java using JavaFX, supporting up to four players. The objective of the game is to strategically navigate a player's piece across the board and reach the opposite side before opponents. Players can either advance their position or place barriers to obstruct opponents' paths, creating a balance between offensive and defensive gameplay.",
        },
        4: {
          title: "Faryssy Shop",
          desc: "Faryssy Shop is a full-stack e-commerce web application developed using Jakarta EE, MySQL, Hibernate, and Apache Tomcat. The platform provides a complete online shopping experience, allowing users to create accounts, browse products, manage shopping carts, and place orders through a secure and intuitive interface. Stripe was integrated to handle online payments securely, while AJAX was used to improve responsiveness and deliver a smoother user experience without requiring full page reloads. The application follows a structured, object-oriented design and leverages Hibernate for efficient database interaction and persistence management. The user interface was built with Bootstrap to ensure a modern, responsive design across different devices and screen sizes. This project demonstrates skills in full-stack web development, database design, payment gateway integration, and the development of scalable, data-driven web applications using Java enterprise technologies.",
        },
      },
      fr: {
        1: {
          title: "Configuration et Sécurisation des Réseaux",
          desc: "Conception et mise en œuvre d’une série de laboratoires réseau à l’aide de Cisco Packet Tracer afin d’acquérir une expérience pratique en administration, configuration et sécurité des réseaux. Le projet comprenait la configuration et le dépannage des listes de contrôle d’accès (ACL) standard et étendues, du Cisco Discovery Protocol (CDP), du Dynamic Trunking Protocol (DTP), du VLAN Trunking Protocol (VTP), du Spanning Tree Protocol (STP), des règles de pare-feu ainsi que de VPN IPSec site à site. Ces travaux pratiques m’ont permis de développer des compétences en segmentation réseau, filtrage du trafic, gestion des VLAN, configuration de commutateurs et routeurs, prévention des boucles, connectivité sécurisée à distance et résolution de problèmes réseau, tout en appliquant des protocoles et des bonnes pratiques de sécurité utilisés dans les environnements d’entreprise.",
        },
        2: {
          title:
            "Homelab Raspberry Pi et Infrastructure d’Accès Distant Sécurisé",
          desc: "Conception et déploiement d’un environnement homelab basé sur Raspberry Pi afin d’héberger et d’administrer des services réseau auto-hébergés au sein d’une infrastructure Linux. Mise en place d’une connectivité VPN sécurisée permettant un accès distant chiffré aux ressources internes depuis Internet tout en garantissant un haut niveau de sécurité. Déploiement de solutions de tunneling réseau pour exposer certains services de manière contrôlée et réduire la surface d’attaque publique. Administration de l’infrastructure Linux, incluant le routage réseau, la configuration du pare-feu, le déploiement de services et la gestion à distance. Ce projet m’a permis d’acquérir une expérience concrète des infrastructures auto-hébergées, des technologies VPN, des architectures d’accès distant sécurisé, de l’administration Linux et des bonnes pratiques de cybersécurité.",
        },
        3: {
          title: "Cy Path - Jeu de Plateau",
          desc: "Conception et développement d’un jeu de plateau multijoueur au tour par tour en Java avec JavaFX, prenant en charge jusqu’à quatre joueurs. L’objectif est de guider stratégiquement son pion jusqu’au côté opposé du plateau avant ses adversaires. Les joueurs peuvent soit avancer leur position, soit placer des barrières pour bloquer les déplacements adverses, créant ainsi un équilibre entre stratégies offensives et défensives.",
        },
        4: {
          title: "Faryssy Shop",
          desc: "Faryssy Shop est une application web e-commerce full-stack développée avec Jakarta EE, MySQL, Hibernate et Apache Tomcat. La plateforme offre une expérience d’achat complète permettant aux utilisateurs de créer un compte, parcourir les produits, gérer leur panier et passer commande via une interface intuitive et sécurisée. Stripe a été intégré afin de traiter les paiements en ligne de manière sécurisée, tandis qu’AJAX a été utilisé pour améliorer la réactivité de l’application et offrir une navigation fluide sans rechargement complet des pages. L’application repose sur une architecture orientée objet structurée et exploite Hibernate pour la gestion efficace de la persistance et des interactions avec la base de données. L’interface utilisateur a été conçue avec Bootstrap afin de garantir un design moderne et adaptatif sur différents appareils et tailles d’écran. Ce projet met en avant des compétences en développement web full-stack, conception de bases de données, intégration de solutions de paiement et développement d’applications web évolutives basées sur les technologies Java d’entreprise.",
        },
      },

      es: {
        1: {
          title: "Configuración y Seguridad de Redes",
          desc: "Diseñé e implementé una serie de laboratorios de redes utilizando Cisco Packet Tracer para adquirir experiencia práctica en administración, configuración y seguridad de redes. El proyecto incluyó la configuración y resolución de problemas de listas de control de acceso (ACL) estándar y extendidas, Cisco Discovery Protocol (CDP), Dynamic Trunking Protocol (DTP), VLAN Trunking Protocol (VTP), Spanning Tree Protocol (STP), reglas de firewall y VPN IPSec sitio a sitio. Estos laboratorios me permitieron desarrollar experiencia en segmentación de redes, filtrado de tráfico, gestión de VLAN, configuración de switches y routers, prevención de bucles, conectividad remota segura y diagnóstico de incidencias, aplicando protocolos y prácticas de seguridad ampliamente utilizados en entornos empresariales.",
        },
        2: {
          title:
            "Homelab con Raspberry Pi e Infraestructura de Acceso Remoto Seguro",
          desc: "Diseñé e implementé un entorno homelab basado en Raspberry Pi para alojar y administrar servicios de red autoalojados dentro de una infraestructura Linux. Configuré una conexión VPN segura para proporcionar acceso remoto cifrado a recursos internos desde redes externas, manteniendo altos estándares de seguridad. También implementé soluciones de túneles de red para exponer determinados servicios a Internet de forma controlada y reducir la superficie de ataque pública. Administré tareas de infraestructura como el enrutamiento de red, la configuración de firewalls, el despliegue de servicios y la gestión remota de sistemas. Este proyecto me permitió adquirir experiencia práctica en infraestructuras autoalojadas, tecnologías VPN, arquitecturas de acceso remoto seguro, administración de Linux y buenas prácticas de seguridad informática.",
        },
        3: {
          title: "Cy Path - Juego de Mesa",
          desc: "Diseñé y desarrollé un juego de mesa multijugador por turnos en Java utilizando JavaFX, con soporte para hasta cuatro jugadores. El objetivo es guiar estratégicamente una ficha hasta el lado opuesto del tablero antes que los demás participantes. Los jugadores pueden avanzar su posición o colocar barreras para bloquear el progreso de sus oponentes, creando un equilibrio entre estrategias ofensivas y defensivas.",
        },
        4: {
          title: "Faryssy Shop",
          desc: "Faryssy Shop es una aplicación web de comercio electrónico full-stack desarrollada con Jakarta EE, MySQL, Hibernate y Apache Tomcat. La plataforma ofrece una experiencia de compra completa, permitiendo a los usuarios crear cuentas, explorar productos, gestionar carritos de compra y realizar pedidos a través de una interfaz intuitiva y segura. Stripe se integró para procesar pagos en línea de forma segura, mientras que AJAX se utilizó para mejorar la capacidad de respuesta de la aplicación y proporcionar una experiencia de usuario más fluida sin necesidad de recargar páginas completas. La aplicación sigue un diseño estructurado y orientado a objetos, aprovechando Hibernate para gestionar de manera eficiente la persistencia y las interacciones con la base de datos. La interfaz fue desarrollada con Bootstrap para garantizar un diseño moderno y adaptable a diferentes dispositivos y tamaños de pantalla. Este proyecto demuestra competencias en desarrollo web full-stack, diseño de bases de datos, integración de pasarelas de pago y creación de aplicaciones web escalables basadas en tecnologías empresariales de Java.",
        },
      },
    }),
    contactText: t({
      en: {
        title: "Let's Connect.",
        text: "Whether you have an opportunity, a project idea, or simply want to connect, I'd love to hear from you. Feel free to get in touch, and I'll get back to you as soon as possible.",
      },
      fr: {
        title: "Parlons.",
        text: "Que vous ayez une opportunité, une idée de projet ou que vous souhaitiez simplement entrer en contact, je serais ravi d'échanger avec vous. N'hésitez pas à me contacter et je vous répondrai dans les plus brefs délais.",
      },
      es: {
        title: "Hablemos.",
        text: "Ya sea que tenga una oportunidad, una idea de proyecto o simplemente desee ponerse en contacto, estaré encantado de hablar con usted. No dude en escribirme y le responderé lo antes posible.",
      },
    }),
    footerText: t({
      en: "All rigths reserved",
      fr: "Tous droits réservés",
      es: "Todos los derechos reservados",
    }),
  },
} satisfies Dictionary;

export default appContent;
