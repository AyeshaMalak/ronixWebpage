import React from "react";
import { Link } from "react-router-dom";
import SideTextSidebar from "../components/SideTextSidebar";

const Section = ({ title, text, img, reverse, first }) => (
  <section
    className={`flex flex-col ${
      img ? (reverse ? "md:flex-row-reverse" : "md:flex-row") : "md:flex-col"
    } ${first ? "items-center justify-center" : "items-start justify-start"} max-w-6xl mx-auto px-8 py-12 gap-8 bg-[#f5f5f5]`}
    style={{ minHeight: first ? "500px" : "auto" }}
  >
    <div className={`${img ? "md:w-1/2" : "w-full"} ${first ? "text-center md:text-left" : "text-left"}`}>
      <h2
        className={`${
          first
            ? "text-4xl md:text-6xl font-extrabold text-[#00D4FF]"
            : "text-2xl sm:text-3xl md:text-4xl font-extrabold text-black"
        } mb-4 tracking-wide`}
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

const Market = () => {
  return (
    <div className="bg-white min-h-screen font-sans relative">
      <SideTextSidebar />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1 z-50 flex justify-center items-center shadow-sm">
        <Link to="/home">
          <img src="./logo.png" alt="RONIX Logo" className="h-14 sm:h-16 object-contain cursor-pointer" />
        </Link>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Sections */}
      <div className="space-y-12 max-w-6xl mx-auto px-4">
        <Section
          first
          title="Digital Media Marketing"
          text="RONIX offers complete Digital Media Marketing services to help your business reach potential clients effectively."
          img="/image3.png"
        />

        <Section
          title="Search Engine Optimization"
          text="SEO plays a key role in Google ranking. We help your website reach top positions and drive relevant traffic efficiently."
        />

        <Section
          title="Marketing Strategy"
          text="We develop tailored strategies to maximize your online presence and exposure."
        />

        <Section
          title="Pay-Per-Click Management"
          text="PPC campaigns provide instant traffic and targeted reach. We manage campaigns strategically to optimize conversions and ROI."
        />
      </div>

      {/* Mobile Bottom Menu */}
      <div className="sm:hidden fixed bottom-16 left-0 right-0 bg-white flex justify-around py-4 z-50 text-black border-t border-gray-200">
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

export default Market;
