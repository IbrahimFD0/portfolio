import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useIntlayer } from "react-intlayer";

const ContactSection = () => {
  const content = useIntlayer("app");
  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "faryssy.ibrahim@gmail.com",
      link: "mailto:faryssy.ibrahim@gmail.com",
    },
    {
      id: 2,
      icon: FaLinkedin,
      title: "Linkedin",
      value: "linkedin.com",
      link: "https://www.linkedin.com/in/fdibrahim/",
    },
    {
      id: 3,
      icon: FaMapMarkedAlt,
      title: "Location",
      value: "Valencia, Spain",
      link: null,
    },
  ];
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            {content.contactText.title}
          </h2>
          <div
            className="w-28 h-1 bg-(--primary) mx-auto mt-2
          rounded-2xl"
          ></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {content.contactText.text}
            </p>
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.id} className="flex items-center gap-4 group">
                    <div
                      className="w-10 h-10 rounded-full bg-(--primary)/10
                    flex items-center justify-center
                    group-hover:bg-(--primary)/20 transition-colors"
                    >
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={
                            info.title === "Location" ? "_self" : "_blank"
                          }
                          rel={
                            info.title === "Location"
                              ? ""
                              : "noopener noreferrer"
                          }
                          className="text-gray-400 text-sm hover:text-purple-700 transition-colors"
                        >
                          {" "}
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm ">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Contact Form */}
          {/* <div className="bg-[#432257] rounded-lg p-6">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm
                  font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-purple-700
                  border border-gray-600 roudned-lg
                  text-white text-sm focus:outline-none
                  focus:border-white transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>{" "}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block mb-2 text-sm
                  font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 bg-purple-700
                  border border-gray-600 roudned-lg
                  text-white text-sm focus:outline-none
                  focus:border-white transition-colors"
                  placeholder="Your Message ..."
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="
              w-full px-6 py-2.5 bg-purple-700 text-white rounded-lg font-medium
              hover:bg-purple-700/50"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
