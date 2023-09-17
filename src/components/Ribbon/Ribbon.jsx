import React, { useEffect, useRef } from "react";
import "./Ribbon.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Ribbon = () => {
  const ribbonCanvasRef = useRef(null);
  const images = [];
  const frameCount = 301;
  const imageSeq = {
    frame: 0,
  };

  useEffect(() => {
    const canvas = ribbonCanvasRef.current;
    const ctx = canvas.getContext("2d");
    console.log(ribbonCanvasRef.current.getBoundingClientRect());

    for (let i = 0; i <= 300; i++) {
      const img = new Image();
      if (i < 10) {
        img.src = `/ribbon/00${i}.webp`;
        images.push(img);
      } else if (i < 100) {
        img.src = `/ribbon/0${i}.webp`;
        images.push(img);
      } else {
        img.src = `/ribbon/${i}.webp`;
        images.push(img);
      }
    }
    const scaleImage = (img, ctx) => {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        300,
        1000,
        600
        //   img.width,
        //   img.height,
        //   centerShift_x,
        //   centerShift_y,
        //   img.width * ratio,
        //   img.height * ratio
      );
    };
    const render = () => {
      console.log(frameCount);
      scaleImage(images[imageSeq.frame], ctx);
    };

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      markers: true,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `.partnerLogoContainer`,
        start: `top top`,
        end: `300% top`,
        // scroller: `.main`,
      },
      onUpdate: render,
    });

    ScrollTrigger.create({
      trigger: ".ribbonContainer>canvas",
      pin: true,
      // markers:true,
      scrub: 2,
      // scroller: `.ribbonContainer`,
      start: `top top`,
      // end: `bottom top`,
    });
    images[1].onload = render;
  }, []);
  return (
    <section className="ribbonContainer">
      <canvas
        ref={ribbonCanvasRef}
        className="ribbon"
        width={1000}
        height={1000}
      ></canvas>
    </section>
  );
};

export default Ribbon;
