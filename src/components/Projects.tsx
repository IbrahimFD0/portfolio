import network from "../assets/network-project.png";
import homelab from "../assets/homelab.png";
import farysshop from "../assets/faryssyshop.png";
import cypath from "../assets/cypath.png";
import { useIntlayer } from "react-intlayer";
const Projects = () => {
  const content = useIntlayer("app");
  const projects = [
    {
      id: 2,
      image: homelab,
      title: content.projectsText[2].title,
      desc: content.projectsText[2].desc,
      tech: ["Raspberry", "n8n", "Docker", "Nginx", "Cloudflare"],
    },
    {
      id: 1,
      image: network,
      title: content.projectsText[1].title,
      desc: content.projectsText[1].desc,
      tech: [
        "ACLs",
        // "CDP DTP VTP",
        "STP",
        "Firewall",
        "IPSec VPN",
        "VLANs",
      ],
    },
    {
      id: 3,
      image: cypath,
      title: content.projectsText[3].title,
      desc: content.projectsText[3].desc,
      tech: ["Java", "HTML", "CSS", "JavaScript", "GitHub"],
    },
    {
      id: 4,
      image: farysshop,
      title: content.projectsText[4].title,
      desc: content.projectsText[4].desc,
      tech: [
        "Jakarta EE",
        "MySQL",
        "Tomcat",
        "Stripe",
        "HTML CSS",
        "JavaScript",
      ],
    },
  ];
  return (
    <section className="py-16" id="projects">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Projects
          </h2>
          <div
            className="w-28 h-1 bg-primary mx-auto mt-2
          rounded-2xl"
          ></div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#23112e] rounded-lg overflow-hidden
                shadow-sm hover:shadow-lg hover:scale-105
                transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover zoom-180 object-top hover:opacity-90
              transition-opacity duration-300"
              />
              <div className="p-4">
                <h3
                  className="text-lg font-semibold text-white
                group-hover:text-primary transition-colors"
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{project.desc}</p>
                <div className="flex flex-warp gap-1.5 mt-3">
                  {project.tech.map((tec, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold px-2 py-0.5 bg-purple-700
                        text-gray-300 rounded hover:bg-primary duration-300"
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
