import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import bytemagicklogo from '../../Assets/bytemagicklogo.webp'; // Import the image
import './Navbar1.css'; // Import the CSS file for this component

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar1() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="navbar"
      style={{ backgroundColor: "#f8f9fa", padding: "10px 0" }}
    >
      <div className="navbar-container">
        <div className="navbar-header">
          <a href="#">
            <img
              src={bytemagicklogo}
              alt="Logo image"
              className="navbar-logo"
            />
          </a>
          <button
            className="navbar-toggle"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="navbar-toggle-bar"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="navbar-toggle-bar"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="navbar-toggle-bar"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="navbar-menu"
        >
          <a
            href="#"
            className="navbar-link"
            style={{ color: "#007bff", padding: "8px 12px" }}
          >
            Home Page
          </a>
          <a
            href="#"
            className="navbar-link"
            style={{ color: "#007bff", padding: "8px 12px" }}
          >
            Get Started
          </a>
          <div className="navbar-actions">
            <Button
              title="Join"
              variant="secondary"
              size="sm"
              className="navbar-button"
              style={{
                margin: "5px",
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "#ffffff",
              }}
            >
              Join
            </Button>
            <Button
              title="Login"
              size="sm"
              className="navbar-button"
              style={{
                margin: "5px",
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "#ffffff",
              }}
            >
              Login
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}