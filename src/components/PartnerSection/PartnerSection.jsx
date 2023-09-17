import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import "./PartnerSection.css";
import Partner from "./Partner";

const PartnerSection = ({ p1, p2, p3, partner, setIsHovered }) => {
  const arrowRef = useRef(null);
  const handleHover = () => {
    setIsHovered(true);
    gsap.to(arrowRef.current, {
      x: 10,
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(arrowRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  // gsap.to(".t1", {
  //   y: "0px",
  //   scrollTrigger: {
  //     scrub: 2,
  //     trigger: ".partner",
  //     start: "50% top",
  //     end: "70% top"
  //   }
  // })
  // gsap.to(".t2", {
  //   y: "0px",
  //   scrollTrigger: {
  //     scrub: 2,
  //     markers: true,
  //     trigger: ".tContainer",
  //     start: "top bottom",
  //     end: "70% top"
  //   }
  // })

  const t2Ref = useRef(null);
  const t1Ref = useRef(null);
  const t3Ref = useRef(null);
  useEffect(() => {
    gsap.to(t1Ref.current, {
      y: 0,
      scrollTrigger: {
        scrub: 2,
        markers: true,
        trigger: ".tContainer",
        start: "top bottom",
        end: "70% bottom",
      },
    });
    gsap.to(t2Ref.current, {
      y: 0,
      scrollTrigger: {
        scrub: 2,
        markers: true,
        trigger: ".tContainer",
        start: "top bottom",
        end: "70% top",
      },
    });
    gsap.to(t3Ref.current, {
      y: 0,
      scrollTrigger: {
        scrub: 2,
        markers: true,
        trigger: ".tContainer",
        start: "top bottom",
        end: "70% top",
      },
    });
  }, []);
  return (
    <section className="partner">
      <div className="tContainer">
        <p ref={t1Ref} className="t1">
          {p1}
        </p>
      </div>
      <div className="tContainer">
        <p ref={t2Ref} className="t2">
          {p2}
        </p>
      </div>

      <div
        className="linkHero"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={t3Ref} className="t3">
          <p>{p3}</p>
          <i ref={arrowRef} class="ri-arrow-right-line"></i>
        </div>
      </div>
      {partner && <Partner />}
    </section>
  );
};

export default PartnerSection;
