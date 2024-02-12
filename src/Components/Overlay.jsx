import React from "react";

const Overlay = ({ toggleOverlay }) => {
  return (
    <div
      id="overlay"
      className="fixed inset-0 bg-black bg-opacity-50"
      onClick={toggleOverlay}
      style={{ zIndex: 1000 }}
    ></div>
  );
};

export default Overlay;
