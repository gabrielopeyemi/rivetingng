import Image from "next/image";
import React from "react";

export default function PortfolioOverlay({
  image,
  activeImage,
  toggleProject,
}) {
  return (
    <div onClick={toggleProject} className="overlay-container">
      <Image src={image} alt="" className="overlay-image" />
      <button onClick={() => toggleProject} className="overlay-button">
        close
      </button>
    </div>
  );
}
