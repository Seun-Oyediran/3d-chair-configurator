"use client";
import React from "react";
import {
  AsciiRenderer,
  Box,
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Page() {
  return (
    <Canvas>
      <ambientLight intensity={0} />
      {/* <color attach="background" args={["#000"]} /> */}
      <mesh>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          speed={5}
          distort={0.7}
          radius={1.25}
          transmission={1}
          roughness={0}
          thickness={1}
          // color="blue"
        />
      </mesh>

      <mesh position={[-4, 0, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          speed={3}
          distort={1}
          radius={1.25}
          transmission={1}
          roughness={0}
          thickness={1}
          // color="red"
        />
      </mesh>

      <Text
        material-color="black"
        material-transparent={false}
        fontSize={3}
        position={[0, 0, -2]}
      >
        Jason Fraud
      </Text>

      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"red"} />
      </mesh>

      {/* <Environment preset="studio" background backgroundBlurriness={1} /> */}
      {/* <AsciiRenderer fgColor="black" bgColor="transparent" /> */}
      <OrbitControls />
    </Canvas>
  );
}
