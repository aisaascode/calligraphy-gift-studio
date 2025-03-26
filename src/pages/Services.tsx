
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Services = () => {
  // Refs for animation elements
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  
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
    if (pricingRef.current) observer.observe(pricingRef.current);
    
    return () => observer.disconnect();
  }, []);
  
  // Services data
  const services = [
    {
      id: "wedding",
      title: "Wedding Calligraphy",
      description: "Add an elegant touch to your special day with custom calligraphy for invitations, place cards, menus, and more.",
      image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Custom invitation design",
        "Envelope addressing",
        "Place cards and escort cards",
        "Menu and program design",
        "Vow and reading cards",
      ],
      delay: "animation-delay-100",
    },
    {
      id: "custom",
      title: "Custom Artwork",
      description: "Transform your favorite quotes, poems, or phrases into beautiful calligraphy artwork for your home or as a thoughtful gift.",
      image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Customized text and style",
        "Various paper and frame options",
        "Digital files for printing",
        "Size options from small to large format",
        "Gift wrapping available",
      ],
      delay: "animation-delay-200",
    },
    {
      id: "branding",
      title: "Business Branding",
      description: "Elevate your business with custom calligraphy logos, website headers, and marketing materials that set you apart.",
      image: "https://images.unsplash.com/photo-1618771414747-2a2614af9a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Logo design and variations",
        "Business cards and letterhead",
        "Social media templates",
        "Digital assets for your website",
        "Brand style guide",
      ],
      delay: "animation-delay-300",
    },
    {
      id: "digital",
      title: "Digital Calligraphy",
      description: "Perfect for online use, digital calligraphy provides versatile options for your website, social media, or digital products.",
      image: "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "High-resolution files",
        "Various formats (PNG, JPG, SVG)",
        "Social media graphics",
        "E-book and course materials",
        "Digital product artwork",
      ],
      delay: "animation-delay-400",
    },
  ];
  
  // Pricing plans
  const pricingPlans = [
    {
      title: "Basic",
      description: "Perfect for simple calligraphy needs",
      price: "$99",
      features: [
        "1 custom design",
        "2 revisions",
        "Digital file delivery",
        "7-day delivery",
      ],
      isPopular: false,
      delay: "animation-delay-100",
    },
    {
      title: "Premium",
      description: "Our most popular option",
      price: "$249",
      features: [
        "3 custom designs",
        "Unlimited revisions",
        "Digital & print files",
        "5-day delivery",
        "Social media formats",
      ],
      isPopular: true,
      delay: "animation-delay-200",
    },
    {
      title: "Business",
      description: "Complete branding solution",
      price: "$499",
      features: [
        "Complete brand package",
        "Logo & business cards",
        "Unlimited revisions",
        "3-day delivery",
        "Social media kit",
        "Brand style guide",
      ],
      isPopular: false,
      delay: "animation-delay-300",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
            Beautiful calligraphy services tailored to your unique needs.
          </p>
        </div>
        
        {/* Services Section */}
        <div
          ref={servicesRef}
          className="space-y-24 mb-24 opacity-0"
        >
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={cn(
                "flex flex-col md:flex-row gap-8 md:gap-12",
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              )}
            >
              <div className="flex-1">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link to="/contact">
                    <Button className="group">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pricing Section */}
        <div
          ref={pricingRef}
          className="opacity-0"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing for our most popular services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className={cn(
                  "rounded-lg border p-8 transition-all",
                  "opacity-0 animate-fade-in",
                  plan.delay,
                  plan.isPopular 
                    ? "border-primary shadow-md relative" 
                    : "border-border hover:border-primary/50 hover:shadow-sm"
                )}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <div className="text-muted-foreground text-sm">per project</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link to="/contact">
                    <Button 
                      variant={plan.isPopular ? "default" : "outline"} 
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Teaser */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're here to help. Contact us for custom quotes or any questions about our services.
          </p>
          <Link to="/contact">
            <Button variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
