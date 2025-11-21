import React from "react";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div className="relative bg-white min-h-screen font-sans">

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1 z-50 flex justify-center items-center shadow-sm">
        <Link to="/home">
          <img
            src="./logo.png"
            alt="RONIX Logo"
            className="h-14 sm:h-16 object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Spacer below header */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="bg-gray-100 flex flex-col justify-center text-center py-20 px-4 md:px-0 max-w-[88%] md:max-w-[90%] mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Contact</h1>
        <p className="italic text-gray-500">
          Whether it's a project or just a cup of coffee!
        </p>
      </section>

      {/* Contact Forms */}
      <section className="max-w-[88%] md:max-w-[90%] mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 pb-28 mt-8">
        
        {/* Get a Quote */}
        <div className="bg-gray-100 p-8 md:p-10 shadow-md rounded-lg border border-gray-200 flex flex-col w-full">
          <h2 className="text-3xl font-extrabold mb-6 text-center md:text-left">Get a Quote</h2>
          <form className="space-y-5 flex flex-col">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Good Name"
                className="flex-1 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
              />
              <input
                type="email"
                placeholder="Favorite Email"
                className="flex-1 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <select className="flex-1 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent">
                <option>Interested In</option>
                <option>Web Design</option>
                <option>Branding</option>
                <option>UI/UX</option>
              </select>
              <select className="flex-1 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent">
                <option>Need Within</option>
                <option>1 Week</option>
                <option>1 Month</option>
                <option>3 Months</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Also please..."
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
            />

            <button
              type="button"
              className="mt-4 font-bold bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent hover:text-black transition text-lg"
            >
              Let’s Rock →
            </button>
          </form>
        </div>

        {/* Befriend */}
        <div className="bg-gray-100 p-8 md:p-10 shadow-md rounded-lg border border-gray-200 flex flex-col w-full">
          <h2 className="text-3xl font-extrabold mb-6 text-center md:text-left">Befriend</h2>
          <form className="space-y-5 flex flex-col">
            <input
              type="email"
              placeholder="Favorite Email"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
            />
            <button
              type="button"
              className="mt-4 font-bold bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent hover:text-black transition text-lg"
            >
              Add Me! →
            </button>
          </form>

          <p className="mt-10 italic text-gray-500 text-sm text-center md:text-left">
            Willing to join us? Send your resume at{" "}
            <span className="underline bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent hover:text-black">
              ronixsoftware@gmail.com
            </span>
          </p>
        </div>

      </section>

      {/* Mobile Bottom Menu */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white flex justify-around py-4 z-50 text-black border-t border-gray-200">
        <Link to="/portfolio" className="font-extrabold text-sm uppercase hover:text-[#0084FF] transition-colors">PORTFOLIO</Link>
        <Link to="/contact" className="font-extrabold text-sm uppercase hover:text-[#0084FF] transition-colors">CONTACT</Link>
      </div>

    </div>
  );
};

export default Contact;
