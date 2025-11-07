import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/Layout.css";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="logo-text">Dev</span>
            <span className="logo-highlight">Patel</span>
          </Link>

          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button 
              className="nav-link nav-link-cta" 
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>

          <button 
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}
