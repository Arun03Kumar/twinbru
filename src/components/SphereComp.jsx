import React, { useRef } from "react";
import { MeshWobbleMaterial, useHelper, useTexture } from "@react-three/drei";
import { PointLightHelper } from "three";
import plainDiffuse from "/sphereTextures/plain-diffuse.webp";
import plainNormal from "/sphereTextures/plain-normal.webp";
import plainRoughness from "/sphereTextures/plain-roughness.webp";
import plainReflection from "/sphereTextures/plain-roughness.webp";
import { useFrame } from "@react-three/fiber";

function Sphere({ position, color, amplitude, scale }) {
  const sphereRef = useRef(null);
  const spherTextures = useTexture({
    map: plainDiffuse,
    normalMap: plainNormal,
    // roughnessMap: plainRoughness,
    // envMap: plainReflection,
  });

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.2 * delta;
      sphereRef.current.position.y +=
        Math.sin(state.clock.elapsedTime * 1) * amplitude;
    }
  });
  return (
    <mesh ref={sphereRef} position={position} scale={scale}>
      <sphereGeometry castShadow args={[20, 64, 64]} roughness={0.9}  metalness={0} reflexivity={0}/>
      <meshStandardMaterial {...spherTextures} color={color} />
    </mesh>
  );
}

const SphereComp = () => {
  const lightRef = useRef(null);
//   useHelper(lightRef, PointLightHelper, 5, "red");
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight ref={lightRef} position={[-100, 50, 50]} intensity={6} />
      <Sphere
        position={[-60, -40, 10]}
        color={"#F2A772"}
        amplitude={0.02}
        scale={1.1}
      />
      <Sphere
        position={[70, -25, 10]}
        color={"#C0918D"}
        amplitude={0.02}
        scale={0.7}
      />
      <Sphere
        position={[110, 60, 10]}
        color={"#DDC3BF"}
        amplitude={0.02}
        scale={0.45}
      />
    </>
  );
};

export default SphereComp;
