import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

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
  { to: "/shop", label: "Shop" },
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
        className={`fixed top-0 right-0 z-50 h-full w-[240px] bg-gray-100 shadow-2xl transform transition-transform duration-300 ${
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
          <IoCloseSharp className="w-5 h-5 text-black" />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 pt-20 px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="block py-3 text-lg font-medium text-gray-900 hover:font-semibold hover:text-black transition  bg-gray-200 rounded-md hover:shadow-md text-center"
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
