import React, { Fragment } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { CushionedChair } from "../models";

export function Experience() {
  return (
    <Fragment>
      <OrbitControls
        maxDistance={80}
        minDistance={15}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.9}
        enablePan={false}
      />
      <ambientLight intensity={0.6} />
      <Stage environment="city" intensity={0.1} adjustCamera={false}>
        <group scale={0.7} rotation-y={Math.PI / 2}>
          <CushionedChair />
        </group>
      </Stage>

      <spotLight position={[0, 2, 0]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-17.5} receiveShadow>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Fragment>
  );
}
