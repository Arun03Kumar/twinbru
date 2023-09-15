import React, { useRef } from "react";
import { gsap } from "gsap";

import "remixicon/fonts/remixicon.css";

const HeroText = () => {
  const arrowRef = useRef(null);

  const handleHover = () => {
    gsap.to(arrowRef.current, {
      x: 10,
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(arrowRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power1.inOut",
    });
  };
  return (
    <div className="heroText">
      <p className="lText">Digital twins of</p>
      <p className="lText">real fabrics</p>
      <p className="descHero">
        The 3D textures of our high performance fabrics simplify your marketing
        process
      </p>
      <div
        className="linkHero"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <p>Browse 3D fabric textures</p>
        <i ref={arrowRef} class="ri-arrow-right-line"></i>
      </div>
      <div className="scrollBar">
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default HeroText;
