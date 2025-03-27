
import React from "react";

const ProcessSection = () => {
  return (
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
  );
};

export default ProcessSection;
