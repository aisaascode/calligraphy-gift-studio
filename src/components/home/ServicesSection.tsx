
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ServicesSection = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
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
    if (servicesRef.current) observer.observe(servicesRef.current);
    
    return () => observer.disconnect();
  }, []);

  // Featured services
  const services = [
    {
      title: "Wedding Invitations",
      description: "Elegant, personalized calligraphy for your special day.",
      icon: "💌",
      delay: "animation-delay-100",
    },
    {
      title: "Custom Artwork",
      description: "Bespoke calligraphy pieces for your home or as gifts.",
      icon: "🖋️",
      delay: "animation-delay-200",
    },
    {
      title: "Business Branding",
      description: "Distinctive calligraphy to elevate your brand identity.",
      icon: "✨",
      delay: "animation-delay-300",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div
        ref={servicesRef}
        className="container mx-auto px-4 md:px-6 opacity-0"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From wedding invitations to custom artwork, we create beautiful calligraphy
            that brings your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-lg shadow-sm p-8 border border-border/50 transition-all duration-300 hover:shadow-md opacity-0 animate-fade-in",
                service.delay
              )}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
