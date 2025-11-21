import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

// Custom Behance SVG Icon
const BehanceIcon = ({ size = 5 }) => (
  <svg
    width={`${size}rem`}
    height={`${size}rem`}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.654 10.273h1.91c.64 0 1.157-.157 1.55-.47.393-.314.59-.756.59-1.328 0-.57-.197-1.01-.59-1.32-.393-.31-.91-.464-1.55-.464h-1.91v3.582zm1.827 1.625h-1.827v3.82h1.99c.71 0 1.28-.18 1.71-.54.43-.36.64-.85.64-1.47 0-.62-.21-1.11-.63-1.47-.42-.36-.99-.54-1.7-.54zm-.117-6.898c1.26 0 2.27.33 3.03.99.77.66 1.16 1.56 1.16 2.7 0 .61-.15 1.16-.45 1.64-.3.48-.72.85-1.27 1.11.72.24 1.27.63 1.66 1.17.39.54.59 1.18.59 1.91 0 1.29-.44 2.28-1.33 2.97-.88.69-2.1 1.04-3.66 1.04h-4.5v-13.52h4.75zm11.598 5.922c.01-.59-.2-1.07-.61-1.43-.41-.36-.97-.54-1.68-.54-.74 0-1.33.18-1.77.54-.44.36-.7.84-.78 1.43h4.84zm2.03.82h-6.9c.04.76.31 1.36.82 1.79.51.43 1.2.65 2.07.65.58 0 1.1-.07 1.54-.22a4.07 4.07 0 0 0 1.22-.58l.86 1.35c-.43.34-.95.62-1.56.82-.61.2-1.32.3-2.14.3-1.57 0-2.79-.44-3.66-1.32-.87-.88-1.3-2.13-1.3-3.75 0-1.62.43-2.88 1.3-3.78.87-.9 2.08-1.35 3.63-1.35 1.45 0 2.58.42 3.39 1.25.81.83 1.21 1.97 1.21 3.43 0 .18-.01.41-.03.67zM18.5 6.5h-3v-1.5h3v1.5z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-white py-2 px-4 border-t border-gray-200">
      {/* Desktop layout */}
      <div className="hidden sm:flex max-w-7xl mx-auto items-center justify-between">
        {/* Left icons */}
        <div className="flex gap-3 items-center">
          <a href="https://www.behance.net/Ronix-Software" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition">
            <BehanceIcon size={1.2} />
          </a>
          <a href="#" className="hover:text-cyan-500 transition"><Linkedin size={20} /></a>
        </div>

        {/* Center text */}
        <div className="text-gray-500 text-base text-center">
          © {currentYear} All rights reserved
        </div>

        {/* Right icons */}
        <div className="flex gap-3 items-center">
          <a href="mailto:ronixsoftware@gmail.com" className="hover:text-cyan-500 transition"><Mail size={20} /></a>
          <a href="#" className="hover:text-cyan-500 transition"><Instagram size={20} /></a>
          <a href="#" className="hover:text-cyan-500 transition"><Twitter size={20} /></a>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col items-center sm:hidden gap-2">
        <div className="text-gray-500 text-sm text-center">
          © {currentYear} All rights reserved
        </div>
        <div className="flex gap-3 items-center justify-center">
          <a href="https://www.behance.net/Ronix-Software" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition">
            <BehanceIcon size={1.2} />
          </a>
          <a href="#" className="hover:text-cyan-500 transition"><Linkedin size={20} /></a>
          <a href="mailto:ronixsoftware@gmail.com" className="hover:text-cyan-500 transition"><Mail size={20} /></a>
          <a href="#" className="hover:text-cyan-500 transition"><Instagram size={20} /></a>
          <a href="#" className="hover:text-cyan-500 transition"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
