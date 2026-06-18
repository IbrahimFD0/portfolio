import { useIntlayer } from "react-intlayer";
import about from "../assets/about.png";
const AboutSection = () => {
  const content = useIntlayer("app");
  return (
    <section className="text-white mt-20 relative overflow-hidden" id="about">
      <div
        className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2
        gap-12 items-center py-16 xl:px-16 relative z-10"
      >
        <div data-aos="fade-rigth">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {content.aboutText.title[0]}{" "}
            <span className="text-primary">{content.aboutText.title[1]}</span>.
          </h2>
          <p className="text-gray-400 text-base lg:text-lg mb-10 leading-relaxed">
            {content.aboutText.desc}
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-xl">
            <div
              className="text-center rounded-2xl bg-cardbg border border-[#2f1641] p-5 
                transition-all duration-300 hover:border-primary/50"
            >
              <h3
                className="text-primary font-bold
                text-2xl md:text-3xl"
              >
                +5
              </h3>
              <p
                className="text-xs text-gray-400 uppercase tracking-wider mt-0.5
              "
              >
                {content.aboutText.competences[0]}
              </p>
            </div>{" "}
            <div
              className="text-center rounded-2xl bg-cardbg border border-[#2f1641] p-5 
                transition-all duration-300 hover:border-primary/50"
            >
              <h3
                className="text-primary font-bold
                text-2xl md:text-3xl"
              >
                +10
              </h3>
              <p
                className="text-xs text-gray-400 uppercase tracking-wider mt-0.5
              "
              >
                {content.aboutText.competences[1]}
              </p>
            </div>{" "}
            <div
              className="text-center rounded-2xl bg-cardbg border border-[#2f1641] p-5 
                transition-all duration-300 hover:border-primary/50"
            >
              <h3
                className="text-primary font-bold
                text-2xl md:text-3xl"
              >
                +3
              </h3>
              <p
                className="text-xs text-gray-400 uppercase tracking-wider mt-0.5
              "
              >
                {content.aboutText.competences[2]}
              </p>
            </div>
          </div>
        </div>
        <div
          className="mt-16 md:mt-0 flex justify-center lg:justify-end relative"
          data-aos="fade-left"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-120">
            <div className="absolute inset-0 z-0 rounded-full shadow-lg border border-purple-700 translate-x-4 translate-y-4"></div>
            <div className="relative z-10 w-full h-full  bg-cardbg rounded-full overflow-hidden border border-[#2f1641]">
              <img
                src={about}
                alt="About"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
