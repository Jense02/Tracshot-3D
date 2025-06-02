import React from "react";

/**
 * A reusable CTA button component.
 * It can act as a smooth-scrolling anchor or a regular external link.
 */

const Button = ({ text, className, id, link, target, rel }) => {
  const isInternalLink = link && link.startsWith("#");

  // De functie voor smooth-scrolling
  const handleScroll = (e) => {
    e.preventDefault();

    const targetId = link.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = window.innerHeight * 0.15;

      const top =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (isInternalLink) {
    return (
      <a
        href={link}
        onClick={handleScroll}
        className={`${className ?? ""} cta-wrapper`}
      >
        <div className="cta-button group">
          <p className="text">{text}</p>
        </div>
      </a>
    );
  } else {
    // Dit is voor externe links
    return (
      <a
        href={link}
        target={target}
        rel={rel}
        className={`${className ?? ""} cta-wrapper`}
      >
        <div className="cta-button group">
          <p className="text">{text}</p>
        </div>
      </a>
    );
  }
};

export default Button;
