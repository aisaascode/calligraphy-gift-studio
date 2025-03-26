
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Home = () => {
  // Refs for animation elements
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
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
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    
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
  
  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      content: "The wedding invitations were absolutely perfect. Everyone commented on how beautiful and unique they were!",
      delay: "animation-delay-100",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "The custom logo design transformed our brand. The calligraphy gives us that perfect balance of elegance and uniqueness.",
      delay: "animation-delay-200",
    },
    {
      name: "Emily Williams",
      role: "Interior Designer",
      content: "The custom quote pieces I ordered for my clients are stunning. The attention to detail is remarkable.",
      delay: "animation-delay-300",
    },
  ];

  return (
    <>
      {/* Hero Section */}
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
      
      {/* Services Preview Section */}
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
      
      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work closely with you to create calligraphy that perfectly captures your vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Consultation', 'Design', 'Review', 'Delivery'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/5 text-primary mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium mb-2">{step}</h3>
                <p className="text-sm text-muted-foreground">
                  {index === 0 && "We discuss your vision, preferences, and requirements."}
                  {index === 1 && "Our calligrapher creates your custom design."}
                  {index === 2 && "You review the work and request any adjustments."}
                  {index === 3 && "Your beautiful finished calligraphy is delivered."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div
          ref={testimonialsRef}
          className="container mx-auto px-4 md:px-6 opacity-0"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beautiful calligraphy that's inspired countless smiles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-lg shadow-sm p-8 border border-border/50 opacity-0 animate-fade-in",
                  testimonial.delay
                )}
              >
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's transform your words into art.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
