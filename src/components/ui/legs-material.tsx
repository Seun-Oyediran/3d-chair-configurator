"use client";
import React, { useContext } from "react";
import CategoryTag from "./category-tag";
import { legsMaterialOptions } from "@/utils/static";
import CategoryImage from "./category-image";
import { setLegsMaterial } from "@/state/reducer";
import { AppContext } from "@/state/context";

export default function LegsMaterial() {
  const { dispatch, state } = useContext(AppContext);

  return (
    <div className="app_content__box app_content__box__ctt">
      <div className="app_content__box__left">
        <div className="app_content__box__main__title">
          <h3 className="app_content__box__left__title">
            Choose Your legs <br /> material
          </h3>
        </div>
      </div>
      <div className="app_content__box__right flex items-center flex-1">
        <div className="flex flex-col gap-4">
          <CategoryTag text="Legs Material" />
          <p className="app_content__box__right__category">
            Choose legs material
          </p>

          <div className="flex gap-2">
            {legsMaterialOptions.map((item) => (
              <CategoryImage
                key={item.id}
                layoutId="legs-material"
                activeMaterial={state.legsMaterial.value}
                img={`/media/images/legs-material/${item.value}.png`}
                value={item.value}
                onClick={() => {
                  dispatch(setLegsMaterial(item));
                }}
              />
            ))}
          </div>

          <div className="app_content__box__right__info pt-3">
            <h5 className="app_content__box__right__info__title">
              {state.legsMaterial.name}
            </h5>
            <p className="app_content__box__right__info__details">
              {state.legsMaterial.info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
