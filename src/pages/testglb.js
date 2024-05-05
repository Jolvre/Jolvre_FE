import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./ExhibitionModel";

export default function View() {
  return (
    <>
      <Canvas camera={{ position: [20, 5, -8] }}>
        <OrbitControls />
        <axesHelper args={[200, 200, 200]} />
        <ambientLight intensity={1} />
        <group rotation-y={-Math.PI / 2}>
          <Model />
        </group>
      </Canvas>
    </>
  );
}
