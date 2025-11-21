import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Brush, Code, TrendingUp } from "lucide-react"; // icons
import SideTextSidebar from "../components/SideTextSidebar";

// Section Component for MoreContent
const Section = ({ title, text, img, reverse }) => (
  <section
    className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-6 p-8 bg-gray-100 border border-gray-300 rounded-md`}
  >
    <div className="md:w-1/2 text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00D4FF] mb-4">{title}</h2>
      <p className="text-gray-800 leading-relaxed">{text}</p>
    </div>
    {img && (
      <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt={title}
          className="rounded-md w-full max-h-60 object-cover shadow-md"
        />
      </div>
    )}
  </section>
);

const MoreContent = () => {
  const location = useLocation();
  const { title, text, img } = location.state || {};

  const services = [
    { title: "UI/UX Design", desc: "Crafting intuitive and visually stunning interfaces.", icon: <Brush className="w-8 h-8" /> },
    { title: "Web Development", desc: "Building scalable, responsive, and robust applications.", icon: <Code className="w-8 h-8" /> },
    { title: "Digital Marketing", desc: "Boosting your brand with data-driven strategies.", icon: <TrendingUp className="w-8 h-8" /> },
  ];

  const timeline = [
    { step: "Ideate & Discover", desc: "Understanding goals, defining vision, and creating the blueprint." },
    { step: "Design & Develop", desc: "Creative design + rapid development ensure flawless execution." },
    { step: "Launch & Optimize", desc: "Testing, deployment, and continuous optimization for peak performance." },
  ];

  return (
    <div className="bg-white font-sans min-h-screen">
  

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1 z-50 flex justify-center items-center shadow-sm">
        <Link to="/home">
          <img src="./logo.png" alt="RONIX Logo" className="h-14 sm:h-16 object-contain cursor-pointer" />
        </Link>
      </div>

      <div className="pt-24 space-y-12 max-w-6xl mx-auto px-4">
        {/* HERO */}
        <Section
          title={title || "RONIX"}
          text={text || "At RONIX, we merge creativity and technology to craft future-ready digital experiences."}
          img={img || "./more.png"}
        />

        {/* SERVICES */}
        <section className="bg-white p-8 border border-gray-300 rounded-md space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00D4FF] text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-md text-center border border-gray-300 shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#00D4FF] text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#00D4FF] mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

     {/* TIMELINE */}
<section className="bg-gray-100 p-8 border border-gray-300 rounded-md">
  <h2 className="text-3xl md:text-4xl font-bold text-[#00D4FF] text-center mb-12 tracking-wide">
    Our Process Timeline
  </h2>
  <div className="relative">
    {/* Vertical line for larger screens */}
    <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-[#00D4FF] h-full transform -translate-x-1/2"></div>

    {timeline.map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col md:flex-row items-start md:items-center w-full mb-16 md:mb-20 relative"
      >
        {/* Dot */}
        <div className="flex md:hidden items-center mb-4">
          <div className="w-6 h-6 bg-[#00D4FF] border-4 border-white rounded-full shadow mr-4 flex-shrink-0"></div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#00D4FF]">{item.step}</h3>
            <p className="text-gray-700 mt-2">{item.desc}</p>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex w-full items-center">
          {idx % 2 === 0 ? (
            <>
              <div className="md:w-1/2 md:pr-12 text-right">
                <h3 className="text-xl font-bold text-[#00D4FF]">{item.step}</h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
              <div className="relative md:w-0">
                <div className="w-6 h-6 bg-[#00D4FF] border-4 border-white rounded-full shadow mx-auto"></div>
              </div>
              <div className="md:w-1/2"></div>
            </>
          ) : (
            <>
              <div className="md:w-1/2"></div>
              <div className="relative md:w-0">
                <div className="w-6 h-6 bg-[#00D4FF] border-4 border-white rounded-full shadow mx-auto"></div>
              </div>
              <div className="md:w-1/2 md:pl-12 text-left">
                <h3 className="text-xl font-bold text-[#00D4FF]">{item.step}</h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            </>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

      </div>

     {/* Mobile Bottom Menu */}
<div className="sm:hidden fixed bottom-16 left-0 right-0 bg-white flex justify-around py-4 z-60 text-black border-t border-gray-200">
  <Link to="/portfolio" className="font-extrabold text-sm uppercase hover:text-[#00D4FF] transition-colors">
    PORTFOLIO
  </Link>
  <Link to="/contact" className="font-extrabold text-sm uppercase hover:text-[#00D4FF] transition-colors">
    CONTACT
  </Link>
</div>

    </div>
  );
};

export default MoreContent;
