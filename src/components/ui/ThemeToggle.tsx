
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "./button";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative"
    >
      <Sun 
        className={`h-5 w-5 transition-all ${
          theme === 'dark' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } absolute`} 
      />
      <Moon 
        className={`h-5 w-5 transition-all ${
          theme === 'light' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } absolute`} 
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
