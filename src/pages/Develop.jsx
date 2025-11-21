import React from "react";
import { Link } from "react-router-dom";
import SideTextSidebar from "../components/SideTextSidebar";

const Section = ({ title, text, img, reverse, first }) => (
  <section
    className={`flex flex-col ${img ? (reverse ? "md:flex-row-reverse" : "md:flex-row") : "md:flex-col"} ${first ? "items-center justify-center" : "items-start justify-start"} max-w-6xl mx-auto px-8 py-12 gap-8 bg-[#f5f5f5]`}
    style={{ minHeight: first ? "500px" : "auto" }}
  >
    <div className={`${img ? "md:w-1/2" : "w-full"} ${first ? "text-center md:text-left" : "text-left"}`}>
      <h2
        className={`${first ? "text-4xl md:text-6xl font-extrabold text-[#00D4FF]" : "text-2xl sm:text-3xl md:text-4xl font-extrabold text-black"} mb-4 tracking-wide`}
      >
        {title}
      </h2>
      <p className="text-base sm:text-lg md:text-lg text-gray-800 leading-relaxed font-sans whitespace-pre-line">
        {text}
      </p>
    </div>
    {img && (
      <div className="md:w-1/2 flex justify-center">
        <img src={img} alt={title} className="rounded-lg w-full max-h-80 object-cover" />
      </div>
    )}
  </section>
);

const Develop = () => {
  return (
    <div className="bg-white min-h-screen font-sans relative">
      <SideTextSidebar />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1 z-50 flex justify-center items-center ">
        <Link to="/home">
          <img src="./logo.png" alt="RONIX Logo" className="h-14 sm:h-16 object-contain cursor-pointer" />
        </Link>
      </div>

      {/* Sections */}
      <div className="space-y-8 md:space-y-12 justify-center max-w-6xl mx-auto px-8 py-20 pb-28">
        <Section
          first
          title={
            <>
              Design <br /> and Develop
            </>
          }
          text="RONIX web design and development team creates powerful online presence for small or medium companies. We focus on effective branding and W3C-compliant websites that add value to your brand."
          img="./image1.png"
        />

        <Section
          title="Web Design and Development"
          text="Your website is an extension of your brand. We help your brand come alive on the web via customized websites designed with your corporation and target audience in mind."
        />

        <Section
          title="Why Choose RONIX?"
          text={`RONIX digital agency offers high-quality and user-friendly web design and development services globally. Benefits of a custom-designed responsive website include:
- Increase Brand Trust and Perception
- Increase Conversions and Sales
- Lower Bounce Rate
- Good for SEO
- Better User Experience
- Mobile-Friendly`}
        />

        <Section
          title="App Design and Development"
          text="RONIX is expert in iPhone/iPad app design and development. We develop apps for iOS and maintain top-class standards while delivering affordable, high-quality products."
        />

        <Section
          title="E-Commerce Development"
          text="We build scalable and secure e-commerce platforms that increase sales, improve user experience, and provide easy management for your business."
        />

        <Section
          title="Maintenance & Support"
          text="RONIX provides ongoing maintenance and support services to ensure your website or app runs smoothly and stays updated with latest standards."
        />
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

export default Develop;
