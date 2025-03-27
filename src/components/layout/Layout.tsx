
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col dark:bg-gray-900 transition-colors duration-300">
        <Navbar isScrolled={isScrolled} />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
