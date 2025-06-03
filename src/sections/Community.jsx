import React from "react";
import Button from "../components/Button";
import WorldExperience from "../components/models/world_models/WorldExperience"; // You'll create this 3D model component

const Community = () => {
  return (
    <section
      id="community"
      className="relative overflow-hidden section-padding"
    >
      <div className="hero-layout">
        {/* LEFT: Community Content */}
        <header className="flex flex-col justify-center md:w-7/12 lg:w-1/2 md:px-20 px-5">
          <div className="flex flex-col ">
            <div className="hero-text">
              <h1 className="text-white font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight">
                Join Our Community
              </h1>
              <p className="text-white-50 text-xl md:text-2xl mt-2">
                Connect with shooting enthusiasts worldwide.
              </p>
            </div>

            <div className="mt-6 max-w-xl">
              <h2 className="text-white text-3xl font-bold mb-4">
                Discover over 80,000 shooting clubs around the globe
              </h2>
              <p className="text-white-50 text-lg leading-relaxed">
                Join a worldwide network of more than 80,000 shooting clubs and
                ranges. Whether you're a seasoned marksman or just getting
                started, there's a place for you in this global community.
                Explore locations, connect with local and international
                shooters, and experience the diversity of shooting sports across
                continents.
              </p>
            </div>

            <Button
              text="Join Now"
              className="md:w-80 md:h-16 w-60 h-12 font-bold mt-8"
              link="https://docs.google.com/forms/d/e/1FAIpQLSfTdSSZQvvLl2itX_OEelDZj2Wf8wNHlWXjyCBHASrqaxTfmA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </header>
        <figure className="md:w-5/12 lg:w-1/2 flex justify-center items-center">
          <div className="community-3d-model-container">
            <WorldExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Community;
