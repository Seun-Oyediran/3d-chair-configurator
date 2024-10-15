"use client";
import React, { useContext } from "react";
import CategoryTag from "./category-tag";
import { seatMaterialOptions } from "@/utils/static";
import CategoryImage from "./category-image";
import { setChairMaterial } from "@/state/reducer";
import { AppContext } from "@/state/context";

export default function SeatMaterial() {
  const { dispatch, state } = useContext(AppContext);

  return (
    <div className="app_content__box app_content__box__ctt">
      <div className="app_content__box__left">
        <div className="app_content__box__main__title">
          <h3 className="app_content__box__left__title">
            Choose Your chair material
          </h3>
        </div>
      </div>
      <div className="app_content__box__right flex items-center flex-1">
        <div className="flex flex-col gap-4">
          <CategoryTag text="Seat Material" />
          <p className="app_content__box__right__category">
            Chose seat material
          </p>

          <div className="flex gap-2">
            {seatMaterialOptions.map((item) => (
              <CategoryImage
                key={item.id}
                layoutId="seat-material"
                activeMaterial={state.chairMaterial.value}
                img={`/media/images/seat-material/${item.value}.png`}
                value={item.value}
                onClick={() => {
                  dispatch(setChairMaterial(item));
                }}
              />
            ))}
          </div>

          <div className="app_content__box__right__info pt-3">
            <h5 className="app_content__box__right__info__title">
              {state.chairMaterial.name}
            </h5>
            <p className="app_content__box__right__info__details">
              {state.chairMaterial.info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
