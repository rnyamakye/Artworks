import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";
import Container from "./Container";
import { IoLogoInstagram, IoLogoWhatsapp, IoMailSharp } from "react-icons/io5";
import { SiTiktok } from "react-icons/si";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleThemeToggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/products", label: "Artworks" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <Container
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-10 py-8 md:px-10 mx-0 flex flex-col justify-center  ${className} ${
          isScrolled
            ? "bg-background/50 backdrop-blur-md shadow-sm"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="max-w-screen-xl mx-4 md:mx-5 h-16 md:h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4 z-10">
            <Link to={"/"}>
              <img
                src="/smartist-logo-1.jpg"
                alt="logo"
                className="w-[40px] rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5 ml-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-md hover:text-black text-gray-900 relative group overflow-hidden"
              >
                {link.label}
                <span className="inline-flex w-full h-[1px] bg-black absolute bottom-0 left-0 transform -translate-x-[50%] scale-0 group-hover:translate-x-0 duration-300 group-hover:scale-100"></span>
              </Link>
            ))}
          </nav>

          <div className="flex gap-2 md:hidden items-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-green-600 hover:text-green-700 transition"
            >
              <IoLogoWhatsapp className="w-5 h-5 text-gray-500 hover:text-gray-800" />
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
              <IoLogoInstagram className="w-5 h-5 text-gray-500 hover:text-gray-800" />
            </a>
            <a
              href="mailto:smartmasterpiece7@gmail.com"
              aria-label="Email"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <IoMailSharp className="w-5 h-5 text-gray-500 hover:text-gray-800" />
            </a>
          </div>

          {/* Right-side Icons */}
          <div className="flex items-center md:space-x-4 ">
            <div className="md:flex hidden gap-2 items-center">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-green-600 hover:text-green-700 transition"
              >
                <IoLogoWhatsapp className="w-5 h-5 text-gray-500 hover:text-gray-800" />
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
                <IoLogoInstagram className="w-5 h-5 text-gray-500 hover:text-gray-800" />
              </a>
              <a
                href="mailto:smartmasterpiece7@gmail.com"
                aria-label="Email"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <IoMailSharp className="w-5 h-5 text-gray-500 hover:text-gray-800" />
              </a>
            </div>
            {/* Profile/Sidebar Button */}
            <button
              className="flex items-center md:hidden gap-2 p-2 rounded-lg hover:bg-gray-200 transition duration-500"
              onClick={() => setShowSidebar(true)}
              aria-label="Open Sidebar"
            >
              <Menu className="h-7 w-7 text-gray-600" />
            </button>
          </div>
        </div>
      </Container>

      {/* Sidebar */}
      <Sidebar
        isOpen={showSidebar}
        onClose={() => setShowSidebar(false)}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />
    </>
  );
};
