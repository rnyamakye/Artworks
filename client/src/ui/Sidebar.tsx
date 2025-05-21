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
  isOpen: boolean; // Controls whether sidebar is visible
  onClose: () => void; // Function to close sidebar
  theme: "light" | "dark"; // Theme mode (not used in this snippet but passed)
  onThemeToggle: () => void; // Theme toggle function (not used here)
};

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/products", label: "Artworks" },
  { to: "/contact", label: "Contact" }
];

const RESOURCES = [
  { to: "/tutorials", label: "Tutorials" },
  { to: "/spotlight", label: "Artist Spotlights" },
  { to: "/supplies", label: "Art Supplies Guide" },
  { to: "/faqs", label: "FAQs" }
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // If click target is outside the sidebar container, close sidebar
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay behind sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose} // Clicking overlay closes sidebar
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-gray-100 shadow-2xl transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        {/* Close button in top-right corner */}
        <button
          className="fixed top-4 right-4 text-2xl hover:text-gray-700"
          onClick={onClose} // Clicking close button closes sidebar
          aria-label="Close"
        >
          <IoCloseSharp className="w-6 h-6 text-black" />
        </button>

        {/* Sidebar content */}
        <div className="mt-12 ml-8 translate-x-5" id="profile">
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
              <IoLogoWhatsapp className="w-6 h-6 text-gray-500 hover:text-gray-800" />
            </a>
            <a
              href="https://www.tiktok.com/@smartist88?_t=ZM-8wXnYAmrfHi&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-black hover:text-gray-700 transition"
            >
              <SiTiktok className="w-6 h-5 text-gray-500 hover:text-gray-800" />
            </a>
            <a
              href="https://www.instagram.com/an_mmanuel?igsh=MXViNWhzajhldTczYg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-pink-600 hover:text-pink-700 transition"
            >
              <IoLogoInstagram className="w-6 h-6 text-gray-500 hover:text-gray-800" />
            </a>
            <a
              href="mailto:smartmasterpiece7@gmail.com"
              aria-label="Email"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <IoMailSharp className="w-6 h-6 text-gray-500 hover:text-gray-800" />
            </a>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className="mt-8 px-6 pb-10 space-y-3">
          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-3 text-lg">
              Quick Links
            </h2>
            <ul className="space-y-2 text-gray-700">
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={onClose} // Close sidebar when link clicked
                    className="block py-2 px-3 rounded-md hover:bg-gray-200 transition font-medium text-gray-700 hover:text-gray-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <ul className="text-gray-700 pl-2">
              {RESOURCES.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={onClose} // Close sidebar when link clicked
                    className="block text-sm py-2 px-3 rounded-md hover:bg-gray-200 transition font-medium text-gray-700 hover:text-gray-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
