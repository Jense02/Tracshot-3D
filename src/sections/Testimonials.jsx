import React, { useRef } from "react";
import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  // Define cardRefs in the parent component to hold all card refs
  const cardRefs = useRef([]);

  // The handleMouseMove function should also be defined here in the parent
  const handleMouseMove = (index) => (e) => {
    // Ensure the element exists before trying to access its properties
    const cardElement = cardRefs.current[index];
    if (!cardElement) return;

    const rect = cardElement.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardElement.style.setProperty("--start", angle + 60);
  };

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Features"
          sub="Discover What Makes Tracshot Your Ultimate Shooting Companion"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16 ">
          {testimonials.map((feature, index) => (
            <GlowCard
              card={feature}
              key={index}
              index={index}
              onMouseMove={handleMouseMove} // Pass the event handler down
              cardRef={cardRefs} // Pass the shared ref object down
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
