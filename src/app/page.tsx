"use client";
import React from "react";
import { Experience } from "@/components/3d";
import { Content } from "@/components/ui";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="app_main">
      <div className="app_main__canvas">
        <Canvas
          shadows
          id="c"
          className="canvas"
          camera={{ position: [0, 10, 30] }}
        >
          <color attach="background" args={["#ededed"]} />
          <fog attach="fog" args={["#ededed", 1, 300]} />
          <Experience />
        </Canvas>
      </div>
      <div className="app_main__ctt">
        <Content />
      </div>
    </main>
  );
}
