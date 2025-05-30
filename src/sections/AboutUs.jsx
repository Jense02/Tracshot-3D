import React from "react";
import TitleHeader from "../components/TitleHeader"; // Ga ervan uit dat je deze component al hebt

const AboutUs = () => {
  return (
    <section id="about-us" className="section-padding">
      {/* Afbeelding bovenaan de sectie */}
      <div className="w-full mb-10">
        {" "}
        {/* mb-10 voor wat ruimte onder de afbeelding */}
        {/*
          Zorg ervoor dat het pad naar je afbeelding correct is.
          Als je de afbeelding 'image_bcef9c.jpg' hebt geüpload naar de 'public' map,
          dan kan het pad iets zijn als '/images/firing-range.jpg' of '/path/to/image_bcef9c.jpg'.
          Vervang 'YOUR_IMAGE_PATH_HERE.jpg' met het daadwerkelijke pad.
        */}
        <img
          src="/images/shootingclub.png" // <-- VERVANG DIT PAD met het pad naar jouw afbeelding
          alt="Shooting range"
          className="w-full h-auto object-cover rounded-xl" // Responsive breedte, behoud aspect ratio, afgeronde hoeken
          style={{ maxHeight: "500px" }} // Optioneel: Maximale hoogte om de afbeelding niet te overweldigend te maken
        />
      </div>

      <div className="w-full md:px-10 px-5 max-w-7xl mx-auto text-center">
        {" "}
        {/* Centreren van de tekst */}
        <TitleHeader
          title="OUR MISSION"
          sub="Empowering Shooting Enthusiasts"
        />
        {/* De missie tekst */}
        <div className="mt-8 text-white-50 text-lg leading-relaxed text-left">
          {" "}
          {/* mt-8 voor ruimte onder de subtitel */}
          <p className="mb-4">
            TracShot was born from a group of passionate students tasked with
            creating a startup for our Business Development course. As shooting
            enthusiasts and tech innovators, we saw a challenge: too much time
            spent calculating scores manually instead of focusing on precision
            and improvement.
          </p>
          <p className="mb-4">
            Our mission? To revolutionize the shooting experience with smart
            technology. TracShot uses AI and advanced analytics to instantly
            process your targets, giving you real-time feedback, accuracy
            insights, and performance trends. So you can train smarter, not
            harder.
          </p>
          <p>
            What started as a class project has grown into something bigger: a
            tool designed to make sports shooting more efficient, precise, and
            data-driven. Join us in redefining the way shooters track their
            progress. TracShot - Your Personal Shooting Coach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
