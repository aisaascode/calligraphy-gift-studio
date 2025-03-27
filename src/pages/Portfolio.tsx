
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // Categories
  const categories = [
    { id: "all", label: "All Work" },
    { id: "gothic", label: "Gothic" },
    { id: "blackletter", label: "Blackletter" },
    { id: "wedding", label: "Wedding" },
    { id: "custom", label: "Custom Art" },
    { id: "color", label: "Color Calligraphy" },
  ];
  
  // Gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Calligraphy in Yellow",
      category: "blackletter",
      image: "/lovable-uploads/d0225e98-6bb7-4964-8ac1-c68033378b8b.png",
      delay: "animation-delay-100",
    },
    {
      id: 2,
      title: "Gothic Alphabet",
      category: "gothic",
      image: "/lovable-uploads/7e6f3618-a1be-496e-9ebc-77be95d7376f.png",
      delay: "animation-delay-200",
    },
    {
      id: 3,
      title: "Calligraphy Style",
      category: "blackletter",
      image: "/lovable-uploads/c7686305-e812-46e4-bfee-e88ae8e9c54e.png",
      delay: "animation-delay-300",
    },
    {
      id: 4,
      title: "Turquoise Lettering",
      category: "color",
      image: "/lovable-uploads/464581e7-edce-4ac2-8ffc-9c133c7b7ae6.png",
      delay: "animation-delay-100",
    },
    {
      id: 5,
      title: "Gothic Calligraphy",
      category: "gothic",
      image: "/lovable-uploads/903734ff-8d45-4737-9833-90cd63783dba.png",
      delay: "animation-delay-200",
    },
    {
      id: 6,
      title: "Ankush - Color Gradient",
      category: "color",
      image: "/lovable-uploads/e8ffa489-9534-4990-9f75-42dc9816b358.png",
      delay: "animation-delay-300",
    },
    {
      id: 7,
      title: "Blackletter Alphabet",
      category: "blackletter",
      image: "/lovable-uploads/e4076bbc-b379-403b-9ff6-e63491a7f731.png",
      delay: "animation-delay-100",
    },
    {
      id: 8,
      title: "Gothic Alphabet Practice",
      category: "gothic",
      image: "/lovable-uploads/74d4cd25-8966-448b-a8c7-263c75cfb5d5.png",
      delay: "animation-delay-200",
    },
    {
      id: 9,
      title: "Happy New Year",
      category: "blackletter",
      image: "/lovable-uploads/954f6ef5-61d9-4767-b193-abe8d78547be.png",
      delay: "animation-delay-300",
    },
    {
      id: 10,
      title: "Formal Script",
      category: "custom",
      image: "/lovable-uploads/3e3e9e98-73c1-4ffc-9613-2f8c0ba6be8c.png",
      delay: "animation-delay-100",
    },
    {
      id: 11,
      title: "Ankush on Pink",
      category: "color",
      image: "/lovable-uploads/faf6a9f9-c5d2-4575-be6e-bc13c4073a28.png",
      delay: "animation-delay-200",
    },
    {
      id: 12,
      title: "Elegant Wedding Invitation",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-300",
    },
    {
      id: 13,
      title: "Custom Anniversary Gift",
      category: "custom",
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-100",
    },
    {
      id: 14,
      title: "Wedding Menu",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-200",
    },
    {
      id: 15,
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
    <div className="pt-24 pb-16 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in dark:text-white">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200 dark:text-gray-300">
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
                  ? "bg-primary text-primary-foreground dark:bg-white dark:text-gray-900"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
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
                "gallery-item card-3d-container transition-all duration-500 overflow-hidden",
                item.delay
              )}
            >
              <Card className="card-3d h-full border border-border/50 dark:border-gray-800 rounded-lg">
                <div className="aspect-square relative group cursor-pointer overflow-hidden rounded-t-lg">
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
              </Card>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground dark:text-gray-400">
              No items found in this category. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
