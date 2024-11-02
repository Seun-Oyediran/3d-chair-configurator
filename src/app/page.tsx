"use client";
import React, { Fragment } from "react";
import { Experience } from "@/components/3d";
import { Content } from "@/components/ui";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { NorthEast } from "@/components/shared/svgs/icons";
import { Loader, RenderIf } from "@/components/shared";

export default function Home() {
  return (
    <Fragment>
      <main className="app_main">
        <div className="app_main__mobile__ctt">
          <div className="app_content__box__left">
            <div className="app_content__box__main__title">
              <h3 className="app_content__box__left__title">
                Design Your perfect <br /> seat
              </h3>
            </div>
            <div className="app_content__box__left__docs px-4 py-5 flex flex-col gap-3">
              <p className="app_content__box__left__docs__text">
                Make it yours. Pick your layout and finishes. Customize your
                seat, colors, and chair legs
              </p>
              <div className="flex">
                <Link href={"#"}>
                  <div className="flex gap-1 items-center">
                    <p className="app_content__box__left__docs__link">
                      Read the docs
                    </p>
                    <NorthEast />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="app_main__canvas">
          <RenderIf condition={true}>
            <Loader />
          </RenderIf>
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
    </Fragment>
  );
}
