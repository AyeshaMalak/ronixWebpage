import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideTextSidebar from "../components/SideTextSidebar";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const portfolioItems = [
    { id: 1, title: "Brand Identity", shortDesc: "Logo & Branding", image: "/portfolio1.png",
      fullDesc: "We create powerful and memorable brand identities that represent your brand vision and uniqueness." },
    { id: 2, title: "Website Design", shortDesc: "Responsive & Modern", image: "/portfolio2.png",
      fullDesc: "Clean, modern, and responsive website design that delivers fast performance and smooth UX." },
    { id: 3, title: "App Development", shortDesc: "iOS & Android Apps", image: "/portfolio3.png",
      fullDesc: "We build fast, secure, and scalable mobile apps for both Android and iOS platforms." },
    { id: 4, title: "Marketing Campaign", shortDesc: "Digital Marketing", image: "/portfolio4.png",
      fullDesc: "Creative and impactful marketing campaigns designed to boost your business visibility." },
    { id: 5, title: "Infographics", shortDesc: "Social Media Graphics", image: "/portfolio5.png",
      fullDesc: "Visually appealing infographics built to communicate your message beautifully and clearly." },
    { id: 6, title: "Stationery Design", shortDesc: "Custom Stationery", image: "/portfolio6.png",
      fullDesc: "Premium stationery including business cards, letterheads, and brand collateral." },
    { id: 7, title: "Social Media Management", shortDesc: "Boosting Presence", image: "/portfolio1.png",
      fullDesc: "We create engaging content and manage social media profiles to grow your online presence." },
    { id: 8, title: "E-commerce App", shortDesc: "Shopping App", image: "/portfolio2.png",
      fullDesc: "Modern, user-friendly shopping apps that make online buying smooth and efficient." },
    { id: 9, title: "SEO Campaign", shortDesc: "Better Ranking", image: "/portfolio3.png",
      fullDesc: "SEO strategies that improve your Google ranking and drive organic traffic." },
  ];

  return (
    <div className="bg-white min-h-screen font-sans relative">
      <SideTextSidebar />

      {/* Header */}
<div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1 z-50 flex justify-center items-center">
  <Link to="/home">
    <img
      src="./logo.png"
      alt="RONIX Logo"
      className="h-14 sm:h-16 object-contain cursor-pointer"
    />
  </Link>
</div>


      <div className="h-20"></div>

      {/* Portfolio Sections */}
      <div className="px-6 md:px-30 py-2">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setModalItem(item)}
              className="relative overflow-hidden border border-gray-300 cursor-pointer group"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay for desktop */}
              {!isMobile && (
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#19D3FF]">{item.title}</h2>
                  <p className="text-base font-semibold text-[#19D3FF] mt-1">{item.shortDesc}</p>
                </div>
              )}

              {/* Text for mobile */}
              {isMobile && (
                <div className="px-4 py-3 text-center bg-white">
                  <h2 className="text-lg font-bold text-[#19D3FF]">{item.title}</h2>
                  <p className="text-sm font-semibold text-[#19D3FF]">{item.shortDesc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    {/* Modal */}
{modalItem && (
  <div
    className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-black/50 backdrop-blur-sm"
    onClick={() => setModalItem(null)}
  >
    <div
      className="bg-white w-full max-w-5xl md:max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-2xl transform scale-95 animate-scaleIn"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image section */}
      <div className="overflow-hidden md:h-auto">
        <img
          src={modalItem.image}
          alt={modalItem.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text section */}
      <div className="p-8 flex flex-col justify-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#19D3FF]">{modalItem.title}</h2>
        <p className="text-gray-700 font-semibold">{modalItem.shortDesc}</p>
        <p className="text-gray-600 leading-relaxed">{modalItem.fullDesc}</p>
        <button
          onClick={() => setModalItem(null)}
          className="mt-4 self-start bg-[#19D3FF] hover:bg-[#0084FF] text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


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

export default Portfolio;
