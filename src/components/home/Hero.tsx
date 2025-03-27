
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe elements
    if (heroRef.current) observer.observe(heroRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618077360395-f30d9defa1a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
      <div
        ref={heroRef}
        className="container mx-auto px-4 md:px-6 relative z-10 opacity-0"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-calligraphy text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-reveal-text">
            Art in Every Stroke
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animation-delay-200 animate-reveal-text">
            Personalized calligraphy that captures the beauty of your words.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animation-delay-300 animate-reveal-text">
            <Link to="/services">
              <Button size="lg" className="group">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative calligraphy element */}
        <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 transform rotate-12">
          <div className="font-calligraphy text-8xl text-black/5">Artistry</div>
        </div>
        <div className="hidden md:block absolute left-10 top-2/3 transform -rotate-12">
          <div className="font-calligraphy text-8xl text-black/5">Elegance</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
