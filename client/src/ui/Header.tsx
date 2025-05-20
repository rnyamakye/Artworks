import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SearchBar } from "./SearchBar";
import { Sidebar } from "./Sidebar";
import Container from "./Container";

export const Header = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [showSidebar, setShowSidebar] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const handleThemeToggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close sidebar when user logs in
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <Container
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-10 py-8 lg:px-10 flex flex-col justify-center  ${className} ${
          isScrolled
            ? "bg-background/50 backdrop-blur-md shadow-sm"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="max-w-screen-xl mx-4 md:mx-5 h-16 md:h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
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

          {/* Right-side Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <a href="tel:+233257152860">
              <FaWhatsapp className="w-5 h-5" />
            </a>

            {/* Profile/Sidebar Button */}
            <button
              className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => setShowSidebar(true)}
              aria-label="Profile"
            >
              <Menu className="h-5 w-5 font-bold" />
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
