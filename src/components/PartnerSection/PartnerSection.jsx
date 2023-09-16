import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import "./PartnerSection.css";
import Partner from "./Partner";

const PartnerSection = () => {
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
    <section className="partner">
      <p>Twinbru & Partners</p>
      <p>We set the industry standard for digital fabrics</p>
      <div
        className="linkHero"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <p>Research Partners</p>
        <i ref={arrowRef} class="ri-arrow-right-line"></i>
      </div>
      <Partner />
    </section>
  );
};

export default PartnerSection;
