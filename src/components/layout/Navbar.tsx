
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b shadow-sm" 
          : "bg-transparent dark:bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-calligraphy text-2xl font-bold tracking-tight text-primary dark:text-white">
              AK Calligraphy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary dark:hover:text-white",
                  location.pathname === item.path
                    ? "text-primary dark:text-white"
                    : "text-muted-foreground dark:text-gray-400"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/signin">
              <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-white">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} className="dark:text-white" /> : <Menu size={24} className="dark:text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b shadow-sm animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "py-2 text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "text-primary dark:text-white"
                      : "text-muted-foreground dark:text-gray-400"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t dark:border-gray-700">
                <Link to="/signin">
                  <Button variant="outline" size="sm" className="w-full dark:border-gray-700 dark:text-white">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
