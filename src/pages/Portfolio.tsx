
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // Categories
  const categories = [
    { id: "all", label: "All Work" },
    { id: "wedding", label: "Wedding" },
    { id: "custom", label: "Custom Art" },
    { id: "branding", label: "Branding" },
    { id: "quotes", label: "Quotes" },
  ];
  
  // Gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Elegant Wedding Invitation",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-100",
    },
    {
      id: 2,
      title: "Minimalist Business Card",
      category: "branding",
      image: "https://images.unsplash.com/photo-1609094122828-8b287d10e07a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-200",
    },
    {
      id: 3,
      title: "Custom Anniversary Gift",
      category: "custom",
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-300",
    },
    {
      id: 4,
      title: "Love Quote Art",
      category: "quotes",
      image: "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-100",
    },
    {
      id: 5,
      title: "Wedding Menu",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-200",
    },
    {
      id: 6,
      title: "Luxury Brand Logo",
      category: "branding",
      image: "https://images.unsplash.com/photo-1544070078-a212eda27b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-300",
    },
    {
      id: 7,
      title: "Custom Name Art",
      category: "custom",
      image: "https://images.unsplash.com/photo-1571172964276-91faaa704e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-100",
    },
    {
      id: 8,
      title: "Inspirational Quote",
      category: "quotes",
      image: "https://images.unsplash.com/photo-1514845505178-849cebf1a91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-200",
    },
    {
      id: 9,
      title: "Wedding Name Cards",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1595229868554-9478490a166a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-300",
    },
  ];
  
  // Filter items based on selected category
  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);
  
  useEffect(() => {
    // Animation for gallery items
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll(".gallery-item");
      items.forEach((item) => {
        item.classList.add("opacity-0");
      });
      
      setTimeout(() => {
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove("opacity-0");
            item.classList.add("animate-scale-in");
          }, index * 100);
        });
      }, 100);
    }
  }, [selectedCategory]);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of our finest calligraphy work across various styles and occasions.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all",
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "gallery-item transition-all duration-500 overflow-hidden rounded-lg shadow-sm hover:shadow-md border border-border/50",
                item.delay
              )}
            >
              <div className="aspect-square relative group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white font-medium text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {categories.find(cat => cat.id === item.category)?.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No items found in this category. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
