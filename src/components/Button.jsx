import React from "react"; // React is nodig als je JSX gebruikt

/**
 * A reusable CTA button component.
 * It can act as a smooth-scrolling anchor or a regular external link.
 */

// De Button component ontvangt nu een 'link' prop
const Button = ({ text, className, id, link, target, rel }) => {
  // Bepaal of het een interne scroll-link of een externe link is
  const isInternalLink = link && link.startsWith("#");

  // De functie voor smooth-scrolling
  const handleScroll = (e) => {
    e.preventDefault(); // Voorkom direct springen

    const targetId = link.substring(1); // Haal de ID op uit de link (e.g., "#about-us" -> "about-us")
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Optionele offset vanaf de bovenkant (bijvoorbeeld om de navbar vrij te houden)
      const offset = window.innerHeight * 0.15; // 15% van de schermhoogte

      const top =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (isInternalLink) {
    return (
      <a
        href={link} // Gebruik de 'link' prop als href
        onClick={handleScroll} // Roept de smooth scroll functie aan
        className={`${className ?? ""} cta-wrapper`}
      >
        <div className="cta-button group">
          <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div>
        </div>
      </a>
    );
  } else {
    // Dit is voor externe links (zoals de Google Form link)
    return (
      <a
        href={link} // Gebruik de 'link' prop als href
        target={target}
        rel={rel}
        className={`${className ?? ""} cta-wrapper`} // Gebruik dezelfde styling als interne knop
      >
        <div className="cta-button group">
          <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />{" "}
            {/* Je kunt hier een ander icoon gebruiken voor externe links */}
          </div>
        </div>
      </a>
    );
  }
};

export default Button;
