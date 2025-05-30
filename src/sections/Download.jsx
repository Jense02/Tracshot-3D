import React from "react";
import TitleHeader from "../components/TitleHeader"; // Assuming you have this component
import Button from "../components/Button"; // Assuming you have this component
import { plans } from "../constants";

const Download = () => {
  return (
    <section id="download" className="section-padding flex-center">
      <div className="w-full text-center max-w-7xl mx-auto">
        {" "}
        {/* Max-width for overall content */}
        {/* Main Heading and Sub-heading */}
        <TitleHeader
          title="Download TracShot"
          sub="Choose the plan that fits your needs"
        />
        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              // Styling for each card: dark background, padding, rounded, shadow, border, flex column for layout
              className="bg-black-100 p-8 rounded-xl shadow-lg border border-black-50 flex flex-col items-center"
            >
              <h3 className="text-white text-3xl font-bold mb-2">
                {plan.name}
              </h3>
              <p className="text-red-500 text-4xl font-extrabold mb-6">
                {plan.price}
              </p>

              <ul className="text-white-50 text-lg mb-8 text-left w-full">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    {/* SVG Checkmark Icon - Adjust color as needed, currently green-400 */}
                    <svg
                      className="w-5 h-5 text-green-400 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* "Get Started" Button - w-full for full width, mt-auto to push it to the bottom of the card */}
              <Button text="Get Started" className="w-full mt-auto" />
            </div>
          ))}
        </div>
        {/* Download Now Section */}
        <h2 className="text-white text-4xl font-bold mt-20 mb-8">
          Download Now
        </h2>
        {/* App Store Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <a
            href="YOUR_GOOGLE_PLAY_LINK_HERE" // <--- REPLACE with your actual Google Play link
            target="_blank"
            rel="noopener noreferrer"
            // Styling for the Google Play button
            className="shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
          >
            {/* Placeholder for Google Play icon - REPLACE src with actual path */}
            <img
              src="/images/googleplaystore.png"
              alt="Get it on Google Play"
              className="h-20 w-auto"
            />
          </a>
          <a
            href="" // <--- REPLACE with your actual App Store link
            target="_blank"
            rel="noopener noreferrer"
            // Styling for the App Store button
            className="shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
          >
            {/* Placeholder for App Store icon - REPLACE src with actual path */}
            <img
              src="/images/appstore.png"
              alt="Download on the App Store"
              className="h-20 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
