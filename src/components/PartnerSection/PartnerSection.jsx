import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import "./PartnerSection.css";
import Partner from "./Partner";

const PartnerSection = ({ p1, p2, p3, partner }) => {
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
      <p>{p1}</p>
      <p>{p2}</p>
      <div
        className="linkHero"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <p>{p3}</p>
        <i ref={arrowRef} class="ri-arrow-right-line"></i>
      </div>
      {partner && <Partner />}
    </section>
  );
};

export default PartnerSection;
