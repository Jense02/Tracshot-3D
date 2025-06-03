// src/components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    // Overlay over de hele pagina
    <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out">
      {/* Modal container */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-50 text-gray-800">
        {/* Modal header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          {title && (
            <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-3xl sm:text-4xl leading-none font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        {/* Modal body (hier komt je policy tekst) */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
