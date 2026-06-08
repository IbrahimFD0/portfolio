import network from "../assets/network-project.png";
import homelab from "../assets/homelab.png";
import farysshop from "../assets/faryssyshop.png";
import cypath from "../assets/cypath.png";
const Projects = () => {
  const projects = [
    {
      id: 2,
      image: homelab,
      title: "Raspberry Homelab & Secure Remote Access Infrastructure",
      desc: "Designed and developed a turn-based multiplayer board game in Java using JavaFX, supporting up to four players. The objective of the game is to strategically navigate a player's piece across the board and reach the opposite side before opponents. Players can either advance their position or place barriers to obstruct opponents' paths, creating a balance between offensive and defensive gameplay.",
      tech: ["Raspberry", "n8n", "Docker", "Nginx", "Cloudflare"],
    },
    {
      id: 1,
      image: network,
      title: "Network Configuration and Security",
      desc: "Designed and implemented a series of networking labs using Cisco Packet Tracer to develop practical experience in network administration, configuration, and security. The project involved configuring and troubleshooting Standard and Extended Access Control Lists (ACLs), Cisco Discovery Protocol (CDP), Dynamic Trunking Protocol (DTP), VLAN Trunking Protocol (VTP), Spanning Tree Protocol (STP), firewall rules, and site-to-site IPSec VPNs. Through these labs, I gained hands-on experience in network segmentation, traffic filtering, VLAN management, switch and router configuration, loop prevention, secure remote connectivity, and network troubleshooting, while applying industry-standard networking protocols and security practices in simulated enterprise environments.",
      tech: [
        "Packet Tracer",
        " Standard & Extended ACLs",
        // "CDP DTP VTP",
        "STP",
        " Firewall",
        " IPSec VPN",
        " VLANs",
      ],
    },
    {
      id: 3,
      image: cypath,
      title: "Cy Path - Board Game",
      desc: "Designed and developed a turn-based multiplayer board game in Java using JavaFX, supporting up to four players. The objective of the game is to strategically navigate a player's piece across the board and reach the opposite side before opponents. Players can either advance their position or place barriers to obstruct opponents' paths, creating a balance between offensive and defensive gameplay.",
      tech: ["Java", "HTML", "CSS", "JavaScript", "GitHub"],
    },
    {
      id: 4,
      image: farysshop,
      title: "Faryssy Shop",
      desc: "Faryssy Shop is a full-stack e-commerce web application developed using Jakarta EE, MySQL, Hibernate, and Apache Tomcat. The platform provides a complete online shopping experience, allowing users to create accounts, browse products, manage shopping carts, and place orders through a secure and intuitive interface. Stripe was integrated to handle online payments securely, while AJAX was used to improve responsiveness and deliver a smoother user experience without requiring full page reloads. The application follows a structured, object-oriented design and leverages Hibernate for efficient database interaction and persistence management. The user interface was built with Bootstrap to ensure a modern, responsive design across different devices and screen sizes. This project demonstrates skills in full-stack web development, database design, payment gateway integration, and the development of scalable, data-driven web applications using Java enterprise technologies.",
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
