
import React from "react";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import AboutCalligraphy from "@/components/home/AboutCalligraphy";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <AboutCalligraphy />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default Home;
