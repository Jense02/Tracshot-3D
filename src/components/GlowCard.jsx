import { useRef } from "react";

const GlowCard = ({ card, index, onMouseMove, cardRef }) => {
  return (
    <div
      // Assign the element to the correct index in the parent's ref array
      ref={(el) => (cardRef.current[index] = el)}
      // Use the onMouseMove handler passed from the parent
      onMouseMove={onMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>

      <div className="flex flex-col">
        <div className="mb-4">
          <img
            src={card.icon}
            alt={`${card.title} icon`}
            className="w-12 h-12"
          />
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">{card.title}</h3>
        <p className="text-white-50 text-base">{card.description}</p>
      </div>
    </div>
  );
};

export default GlowCard;
