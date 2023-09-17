import React, { useEffect, useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Nav = ({ setIsHovered }) => {
  const navigation = [
    "Platforms",
    "Partnerships",
    "Use cases",
    "About",
    "News",
    "Contact",
  ];
  const [isVisible, setIsVisible] = useState(true);
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(logoRef.current, {
      x: "-50px",
      scrollTrigger: {
        scrub: 1,
        start: `top top`,
        end: "100px top",
      },
      // duration: 1
    });
    gsap.to(logoRef.current, {
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        scrub: 1,
        start: `top top`,
        end: "100px top",
      },
    });
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY <= 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div
        className="leftNav"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ background: "#C29A94", zIndex: 10 }}>
          <div className="logo">
            <div className="innerC"></div>
          </div>
        </div>
        <p ref={logoRef}>twinbru</p>
      </div>
      {isVisible && (
        <div className="centerNav">
          {navigation.map((item, i) => (
            <p
              className="navItem"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {item}
            </p>
          ))}
        </div>
      )}
      <div className="rightNav">
        <i class="ri-menu-4-line"></i>
      </div>
    </nav>
  );
};

export default Nav;
