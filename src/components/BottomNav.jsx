import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
const BottomNav = () => {
  const colorArr = ["#dfb0a9", "#c8c7ff", "#c6e38b", "#fde391"];
  const [color, setColor] = useState("#dfb0a9");
  const [isOpen, setIsopen] = useState(false);

  const animateLeftBottomNav = () => {
    // gsap.from(".leftBottomNav", {
    //   width: "50px",
    //   height: "50px", // Start off-screen to the left
    //   duration: 0.5, // Animation duration
    //   ease: "power2.out", // Easing function
    // });
    gsap.to(".singleCir", {
      width: isOpen ? "160px" : "50px",
      // borderRadius: isOpen ? "30px" : "50%",
      // justifyContent: "flex-start",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div className="bottomNav">
      {/* {isOpen ? (
        <div className="cir leftBottomNav">
          {colorArr.map((item, i) => (
            <div
              className="colorCir"
              style={{ backgroundColor: item }}
              onClick={() => {
                setIsopen(!isOpen);
                setColor(item);
                // animateLeftBottomNav();
              }}
            ></div>
          ))}
        </div>
      ) : (
        <div className="cir singleCir" 
        onClick={() => setIsopen(true)}
        >
          <div className="colorCir" style={{ backgroundColor: color }}></div>
        </div>
      )} */}

      <div style={{ width: "160px", height: "50px" }}>
        <div
          className="singleCir"
          style={{
            // display: isOpen ? "none" : "flex",
            // position: "absolute",
            zIndex: "15",
          }}
        >
          <div
            className="colorCir"
            style={{ backgroundColor: !isOpen ? "#dfb0a9" : color }}
            onClick={() => {
              setIsopen(!isOpen);
              setColor("#dfb0a9");
              animateLeftBottomNav();
            }}
          ></div>
          <div
            className="colorCir"
            style={{ backgroundColor: "#c8c7ff" }}
            onClick={() => {
              setIsopen(!isOpen);
              setColor("#c8c7ff");
              animateLeftBottomNav();
            }}
          ></div>
          <div
            className="colorCir"
            style={{ backgroundColor: "#c6e38b" }}
            onClick={() => {
              setIsopen(!isOpen);
              setColor("#c6e38b");
              animateLeftBottomNav();
            }}
          ></div>
          <div
            className="colorCir"
            style={{ backgroundColor: "#fde391" }}
            onClick={() => {
              setIsopen(!isOpen);
              setColor("#fde391");
              animateLeftBottomNav();
            }}
          ></div>
        </div>
        {/* <div className="cir leftBottomNav" style={{display: isOpen ? "flex" : "none", position: "absolute"}}>
          {colorArr.map((item, i) => (
            <div
              className="colorCir"
              style={{ backgroundColor: item }}
              onClick={() => {
                setIsopen(!isOpen);
                setColor(item);
                gsap.to(".leftBottomNav", {
                  width: "0px",
                  display: "none", // Start off-screen to the left
                  duration: 0.5, // Animation duration
                  ease: "power2.out", // Easing function
                  onComplete: () => {document.querySelector(".leftBottomNav").style.width = "160px"}
                });
              }}
            ></div>
          ))}
        </div> */}
      </div>

      <div className="cir rightBottomNav">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default BottomNav;
