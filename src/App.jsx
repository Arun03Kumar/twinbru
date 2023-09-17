import { Suspense, useState, useRef, useEffect } from "react";
import * as THREE from "three";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import SphereComp from "./components/SphereComp";
import Logo from "/blue.svg";
import Nav from "./components/Nav";
import BottomNav from "./components/BottomNav";
import HeroText from "./components/HeroText";
import PartnerSection from "./components/PartnerSection/PartnerSection";
import Ribbon from "./components/Ribbon/Ribbon";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const [lastFrameTime, setLastFrameTime] = useState(0);
  const circleCanvasRef = useRef(null);
  const images = [];
  let currentFrame = 0;
  const frameRate = 1;
  const clock = new THREE.Clock();
  let lastElapse = 0;

  useEffect(() => {
    const canvas = circleCanvasRef.current;
    const ctx = canvas.getContext("2d");

    for (let i = 0; i < 251; i++) {
      const img = new Image();
      if (i < 10) {
        img.src = `/circle/00${i}.webp`;
        images.push(img);
      } else if (i < 100) {
        img.src = `/circle/0${i}.webp`;
        images.push(img);
      } else {
        img.src = `/circle/${i}.webp`;
        images.push(img);
      }
    }

    for (let i = 250; i >= 0; i--) {
      const img = new Image();
      if (i < 10) {
        img.src = `/circle/00${i}.webp`;
        images.push(img);
      } else if (i < 100) {
        img.src = `/circle/0${i}.webp`;
        images.push(img);
      } else {
        img.src = `/circle/${i}.webp`;
        images.push(img);
      }
    }

    const rendernextFrame = () => {
      const elapsedTime = clock.getElapsedTime() * 30;
      lastElapse = Math.floor(elapsedTime - lastElapse);
      // console.log(lastElapse)
      // console.log(elapsedTime)
      const frameNumber = Math.floor(elapsedTime) % images.length;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images[frameNumber], 10, 80, 534, 534);
      // ctx.drawImage(images[currentFrame], 10, 30, 524, 524);
      // if(lastElapse - prevElapse)
      // currentFrame = (currentFrame + 1) % images.length;
      requestAnimationFrame(rendernextFrame);
    };

    const animationId = requestAnimationFrame(rendernextFrame);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  return (
    <div className="main">
      <div style={{ width: "100vw", height: "130vh" }}>
        <Canvas
          // shadowMap
          camera={{
            position: [0, 0, 300],
            fov: 35,
            near: 0.1,
            far: 1000,
          }}
        >
          <SphereComp />
        </Canvas>
      </div>
      <canvas
        ref={circleCanvasRef}
        id="circleAnimation"
        width={654}
        height={654}
      ></canvas>
      <Nav />
      <BottomNav />
      <HeroText />
      <PartnerSection
        p1="Twinbru & Partners"
        p2="We set the industry standard for digital fabrics"
        p3="Research Partners"
        partner={true}
      />
      <Ribbon />
      <PartnerSection
        p1="Explore the possibilities"
        p2="Craft strong marketing content with
our 3D fabric textures"
        p3="View use cases
"
        partner={false}
      />
    </div>
  );
}

export default App;
