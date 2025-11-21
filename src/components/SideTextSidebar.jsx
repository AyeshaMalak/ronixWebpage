import { Link } from "react-router-dom";

const SideTextSidebar = () => {
  return (
    <div
      className="hidden sm:flex flex-col items-center fixed z-40 left-24 top-1/2 -translate-y-1/2 w-12"
    >
      <Link
        to="/portfolio"
        className="font-extrabold text-sm sm:text-base uppercase hover:text-[#00D4FF] transition-colors mb-4"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          letterSpacing: "1px",
        }}
      >
        PORTFOLIO
      </Link>

      <Link
        to="/contact"
        className="font-extrabold text-sm sm:text-base uppercase hover:text-[#00D4FF] transition-colors"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          letterSpacing: "1px",
        }}
      >
        CONTACT
      </Link>
    </div>
  );
};

export default SideTextSidebar;
