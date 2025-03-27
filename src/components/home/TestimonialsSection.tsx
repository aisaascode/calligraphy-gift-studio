
import React, { useRef, useEffect } from "react";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TestimonialsSection = () => {
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
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    
    return () => observer.disconnect();
  }, []);

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
  );
};

export default TestimonialsSection;
