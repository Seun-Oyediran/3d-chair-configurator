/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 cushioned_chair.glb -k 
Author: Valeri Valah (https://sketchfab.com/valeri.valah)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/cushioned-chair-4bb7005f1b064aa2bd1edf3a9fcd4e25
Title: Cushioned Chair
*/

import React, { useContext, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color, MeshStandardMaterial } from "three";
import { AppContext } from "@/state/context";
import { useFrame } from "@react-three/fiber";

// eslint-disable-next-line
export function CushionedChair(props: any) {
  // eslint-disable-next-line
  const { nodes, materials } = useGLTF("/models/cushioned_chair.glb") as any;
  const { state } = useContext(AppContext);

  const pillowMaterialRef = useRef<MeshStandardMaterial>(null);

  useFrame(() => {
    pillowMaterialRef.current?.color?.lerp(
      new Color(state.pillowColor.value),
      0.05
    );
  });

  return (
    <group {...props} position={[0, 0, 0]} dispose={null}>
      {/* leg */}
      <group
        name="Cylinder001"
        position={[-49.544, 0, 41.829]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Cylinder001_legs_0"
          geometry={nodes.Cylinder001_legs_0.geometry}
          material={materials.legs}
        />
        <mesh
          name="Cylinder001_pillow_0"
          geometry={nodes.Cylinder001_pillow_0.geometry}
          material={materials.pillow}
        />
      </group>

      {/* leg */}
      <group
        name="Cylinder004"
        position={[-35.28, 0, 56.757]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Cylinder004_legs_0"
          geometry={nodes.Cylinder004_legs_0.geometry}
          material={materials.legs}
        />

        <mesh
          name="Cylinder004_pillow_0"
          geometry={nodes.Cylinder004_pillow_0.geometry}
          material={materials.pillow}
        />
      </group>

      {/* leg */}
      <mesh
        name="Cylinder002_legs_0"
        geometry={nodes.Cylinder002_legs_0.geometry}
        material={materials.legs}
        position={[-49.544, 0, 56.757]}
        rotation={[-Math.PI / 2, 0, 0]}
        visible={!false}
      />

      {/* leg */}
      <mesh
        name="Cylinder003_legs_0"
        geometry={nodes.Cylinder003_legs_0.geometry}
        material={materials.legs}
        position={[-35.297, 0, 41.829]}
        rotation={[-Math.PI / 2, 0, 0]}
        visible={!false}
      />

      {/* chair */}
      <mesh
        name="Plane004_chair_0"
        geometry={nodes.Plane004_chair_0.geometry}
        material={materials.chair}
        position={[-47.208, 18.144, 45.595]}
        rotation={[-Math.PI / 2, 0, 0]}
        visible={!false}
      />

      {/* pillow */}
      <mesh
        name="Box001_pillow_0"
        geometry={nodes.Box001_pillow_0.geometry}
        // material={materials.pillow}
        position={[-44.53, 19.265, 49.271]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          ref={pillowMaterialRef}
          {...materials.pillow}
          // color={state.pillowColor.color}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/cushioned_chair.glb");
