
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutCalligraphy = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
            The Art of Calligraphy
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              Calligraphy is the art of beautiful handwriting, combining creativity with precision. 
              It has been practiced for centuries across various cultures, including Chinese, Arabic, 
              and Western traditions. Calligraphy involves using specialized tools like brush pens, 
              dip pens, or fountain pens to create elegant, flowing letters with varying thicknesses.
            </p>
            
            <p className="mb-4">
              Historically, calligraphy was essential for religious texts, manuscripts, and royal decrees. 
              In Islamic culture, Arabic calligraphy is highly revered, often adorning mosques and sacred texts. 
              Chinese calligraphy, on the other hand, is an expressive form that emphasizes brush strokes and balance. 
              Western calligraphy evolved through medieval scripts such as Gothic and Italic styles.
            </p>
            
            <p className="mb-4">
              Today, calligraphy is popular in modern design, from wedding invitations to digital typography. 
              It enhances branding, logo design, and personal projects. With the rise of digital tools, 
              calligraphy has also adapted to new platforms, merging traditional techniques with digital artistry.
            </p>
            
            <p>
              Practicing calligraphy requires patience and precision, making it a meditative and rewarding art form. 
              Whether for artistic expression or professional use, calligraphy remains a timeless craft that 
              continues to captivate people worldwide.
            </p>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore Our Calligraphy Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCalligraphy;
