import { useNavigate, Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import SideScroller from "../components/SideScroller";
import SideTextSidebar from "../components/SideTextSidebar";

// Section Component
const Section = ({ id, title, text, img, reverse, moreLink, moreText }) => {
  const navigate = useNavigate();

  return (
    <section
      id={id}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between max-w-6xl mx-auto px-8 py-12 bg-[#f5f5f5] border-t border-gray-200 gap-8`}
      style={{ minHeight: "500px" }}
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#00D4FF] tracking-wide transition-colors hover:text-[#00D4FF]">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed font-sans">
          {text}
        </p>
        {moreLink && moreText && (
  <div className="mt-6 flex justify-center md:justify-start">
    <button
      onClick={() =>
        navigate(moreLink, {
          state: { title, text, img },
        })
      }
      className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2 font-bold text-black text-base sm:text-lg md:text-xl hover:text-[#00D4FF] transition-colors"
    >
      <span className="truncate">{moreText}</span>

    </button>
  </div>
)}

      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt={title}
          className="rounded-lg w-full max-h-80 object-cover"
        />
      </div>
    </section>
  );
};

// Animated Text Component
const AnimatedText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="font-extrabold text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[120px] leading-none mb-8 text-center text-[#00D4FF] tracking-wide">
      {displayText}
      {showCursor && (
        <span className="inline-block w-[2px] h-[1em] bg-gray-400 ml-1 align-middle animate-pulse"></span>
      )}
    </h1>
  );
};

// Home Component
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-white">
      <SideTextSidebar />

      <div className="flex-1 md:ml-12">

        <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1 z-40 flex justify-center items-center">
          <img
            src="/logo.png"
            alt="RONIX Logo"
            className="h-14 sm:h-16 object-contain"
          />
        </div>



        <SideScroller />

        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center max-w-6xl mx-auto px-8 py-16 bg-[#f5f5f5] border-t border-gray-200 gap-8"
          style={{ minHeight: "500px" }}
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 mb-6 pt-8 font-extrabold text-base sm:text-lg md:text-xl uppercase tracking-wider text-black">
            <Link to="/design" className="hover:text-[#00D4FF] transition-colors">DESIGN</Link>
            <Link to="/develop" className="hover:text-[#00D4FF] transition-colors">DEVELOP</Link>
            <Link to="/market" className="hover:text-[#00D4FF] transition-colors">MARKET</Link>
          </div>

          <AnimatedText text="RONIX" />

          <p className="text-center text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed px-4 text-gray-800 font-sans">
            A <span className="font-medium text-[#00D4FF]">design obsessed</span> digital agency elevating brands
            <br className="hidden sm:block" />
            to their maximum with a firm belief that{" "}
            <span className="font-medium text-[#00D4FF]">limit is just an illusion.</span>
          </p>

          <div
            className="mt-8 flex flex-col items-center text-xs uppercase tracking-widest text-black cursor-pointer"
            onClick={() => navigate("/portfolio")}
          >
            <span className="font-bold hover:text-[#00D4FF] transition-colors">FEATURED WORK</span>
            <ArrowDown className="mt-2 h-5 w-5 animate-bounce text-[#00D4FF]" />
          </div>
        </section>

        {/* Sections */}
        <Section
          id="section1"
          title="Our Design Expertise"
          text="We create stunning visual designs that elevate your brand and leave a lasting impression. Our team focuses on unique concepts, color schemes, and layouts that make your brand stand out. Every design is tailored to reflect your brand’s personality and vision."
          img="/image1.png"
          moreLink="/morecontent"
          moreText="More >"
        />

        <Section
          id="section2"
          title="Development Solutions"
          text="We build robust, scalable applications with modern technology stacks. Our developers ensure clean code, responsive design, and seamless user experiences. From web apps to mobile platforms, we create solutions that meet your business needs and future growth."
          img="/image2.png"
          reverse
          moreLink="/morecontent"
          moreText="More >"
        />

        <Section
          id="section3"
          title="Marketing Strategies"
          text="Our marketing solutions help your business reach the right audience effectively. We create data-driven campaigns, optimize social media, and analyze trends to boost engagement. With strategic planning, we aim to increase brand awareness and generate measurable results for your business."
          img="/image3.png"
          moreLink="/morecontent"
          moreText="More >"
        />

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
    </div>
  );
};

export default Home;
