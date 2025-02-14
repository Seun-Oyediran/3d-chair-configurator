"use client";
import * as THREE from "three";
import { Fragment, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  GradientTexture,
  useCursor,
} from "@react-three/drei";

function Flag() {
  const ref = useRef<any>();
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame(() => {
    if (!ref?.current) return;
    ref.current.distort = THREE.MathUtils.lerp(
      ref.current.distort,
      hovered ? 0.4 : 0,
      hovered ? 0.05 : 0.01
    );
  });
  return (
    <Fragment>
      <mesh
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        scale={[2, 4, 1]}
      >
        <planeGeometry args={[1, 1, 32, 32]} />
        <MeshDistortMaterial ref={ref} speed={5} transparent opacity={1}>
          <GradientTexture
            stops={[0, 0.3, 1]}
            colors={["#ffffff", "#f1faee", "#000000"]}
            size={100}
          />
        </MeshDistortMaterial>
      </mesh>

      <mesh position={[0, 0, -0.1]} scale={[2, 4, 1]}>
        <planeGeometry args={[1, 1, 32, 32]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </Fragment>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <Flag />
    </Canvas>
  );
}
