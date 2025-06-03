import { socialImgs } from "../constants";
import React, { useState } from "react";
import Modal from "../components/Modal";
import PrivacyPolicyPageContent from "./PrivacyPolicyPage";
import TermsAndConditionsPageContent from "./TermsAndConditionsPage";

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      {" "}
      {/* Gebruik React Fragment omdat we nu modals buiten de footer renderen */}
      <footer className="footer ">
        <div className="footer-container">
          {/* Sectie voor juridische links */}
          <div className="flex flex-col items-center md:items-start">
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:underline mb-1 md:mb-2 cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>

          {/* Social media iconen */}
          <div className="socials flex justify-center gap-5">
            {socialImgs.map((socialImg, index) => (
              <div key={index} className="icon">
                <a
                  href={socialImg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={socialImg.name}
                >
                  <img
                    src={socialImg.imgPath}
                    alt={`${socialImg.name} icon`}
                    className="h-6 w-6 hover:opacity-75 transition-opacity"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm">
              © {new Date().getFullYear()} TracShot. All rights reserved
            </p>
          </div>
        </div>
      </footer>
      {/* Modals (worden alleen getoond als de bijbehorende state true is) */}
      <Modal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        title="Terms & Conditions"
      >
        <TermsAndConditionsPageContent />
      </Modal>
      <Modal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title="Privacy Policy"
      >
        <PrivacyPolicyPageContent />
      </Modal>
    </>
  );
};

export default Footer;
