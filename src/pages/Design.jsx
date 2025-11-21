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

const Design = () => {
  return (
    <div className="bg-white min-h-screen font-sans relative">
      <SideTextSidebar />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1 z-50 flex justify-center items-center">
        <Link to="/home">
          <img src="./logo.png" alt="RONIX Logo" className="h-14 sm:h-16 object-contain cursor-pointer" />
        </Link>
      </div>

      {/* Sections */}
      <div className="space-y-8 justify-center max-w-6xl mx-auto px-4 py-20 pb-28">
        <Section
          first
          title="Brand Identity"
          text="We create strong brand identities that elevate your business globally. Clear and memorable designs for maximum impact. Each element reflects your brand’s essence."
          img="./image3.png"
        />

        <Section
          title="Brand Guidelines"
          text="Every brand is unique and thus we have to make specific choices of colours, shades, tints, fonts, sizes and what not."
        />

        <Section
          title="Brand Reputation"
          text="Brand Reputation — it's what your organization is based on. Corporate ‘reputation’ is a complex concept. It is the overall estimation in which a firm is considered by its internal and external stakeholders based on its past accomplishments and probability of its future growth. It's what your clients construct their steadfastness with respect to. It's the perfection of everything your organization does, from item quality to representative conduct and everything in the middle. It takes a lifetime to assemble, however just a moment to be torn separated. RONIX helps you maintain your brand reputation as it should be."
        />

        <Section
          title="Logo Design"
          text={`Your business logo should be composed by somebody who gets your image. Our master in-house creators set aside the opportunity to find out about you and your business to make a logo that superbly speaks your organization.

We convey quality logos at moderate costs with the extraordinary support. We have clients worldwide and a capable, experienced group of in-house logo creators who will work with you to make an extraordinary logo that will add tremendous amounts of excellence in your brand.

We have a decent comprehension of business ideas and marking symbolism to make an impactful corporate personality. We known for designing awesome logos in a timely manner and affordable prices.`}
        />

        <Section
          title="Business Cards"
          text={`Tasteless business cards are bound to get pushed into pockets and discarded later. To make an ideal impact on the general population you meet, your custom business card ought to be unique to the point that they feel constrained to keep it.

RONIX offers proficient business cards designs that fits well with your corporate identity. Clients needing to incorporate their business logo on their business card are required to give RONIX a logo record in editable vector graphic (ai, eps). On the off chance that your logo is not in the correct format, our creators can give you an awesome logo as well.`}
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

export default Design;
