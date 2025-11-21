import { useState, useEffect } from "react";

const SideScroller = () => {
  const sections = ["home", "section1", "section2", "section3"];
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 hidden md:flex">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-6 h-1 rounded-full transition-all duration-300 ${
            active === id
              ? "bg-[#00ccff] scale-x-125"
              : "bg-[#00e1ff] hover:bg-[#19D3FF] scale-x-100"
          }`}
          aria-label={`Navigate to ${id}`}
        />
      ))}
    </div>
  );
};

export default SideScroller;
