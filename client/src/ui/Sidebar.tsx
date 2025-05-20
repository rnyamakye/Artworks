import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import {
  IoCloseSharp,
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoMailSharp
} from "react-icons/io5";
import { SiTiktok } from "react-icons/si";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  theme: "light" | "dark";
  onThemeToggle: () => void;
};

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/products", label: "Artworks" },
  { to: "/contact", label: "Contact" }
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Sidebar from the RIGHT */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-[250px] bg-gray-100 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-2xl hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          <IoCloseSharp className="w-6 h-6 text-black" />
        </button>

        <div className="mt-12 ml-8  translate-x-5">
          <img src="/award-image.JPG" alt="Award" className="w-32 rounded-xl" />
          {/* Social Icons */}
          <div className="flex gap-4 mt-6 items-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-green-600 hover:text-green-700 transition"
            >
              <IoLogoWhatsapp className="w-6 h-6 text-gray-500 hover-text-gray-800" />
            </a>
            <a
              href="https://www.tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-black hover:text-gray-700 transition"
            >
              <SiTiktok className="w-6 h-5 text-gray-500 hover-text-gray-800" />
            </a>
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-pink-600 hover:text-pink-700 transition"
            >
              <IoLogoInstagram className="w-6 h-6 text-gray-500 hover-text-gray-800" />
            </a>
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <IoMailSharp className="w-6 h-6 text-gray-500 hover-text-gray-800" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap- pt-5 pl-5 pr-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="block py-3 px-2 text-lg font-medium text-gray-600 hover:font-semibold hover:text-black transition bg-gray-100 rounded-md hover:bg-gray-200"
            >
              {link.label}
            </Link>
          ))}
          {/* More links for logged-in users */}
        </nav>

        {/* Theme toggle */}
      </div>
    </>
  );
};
