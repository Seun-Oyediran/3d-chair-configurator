"use client";
import React, { useContext } from "react";
import CategoryTag from "./category-tag";
import { seatColorOptions } from "@/utils/static";
import CategoryColor from "./category-color";
import { setPillowColor } from "@/state/reducer";
import { AppContext } from "@/state/context";

export default function PillowColor() {
  const { dispatch, state } = useContext(AppContext);

  return (
    <div className="app_content__box app_content__box__ctt">
      <div className="app_content__box__left">
        <div className="px-4 py-11">
          <h3 className="app_content__box__left__title">
            Design Your perfect <br /> pillow
          </h3>
        </div>
      </div>
      <div className="app_content__box__right flex items-center flex-1">
        <div className="flex flex-col gap-4">
          <CategoryTag text="Pillow color" />
          <p className="app_content__box__right__category">
            Chose your pillow color
          </p>

          <div className="flex gap-2">
            {seatColorOptions.map((item) => (
              <CategoryColor
                key={item.id}
                activeColor={state.pillowColor.color}
                color={item.color}
                layoutId="pillow-color"
                onClick={() => {
                  dispatch(setPillowColor(item));
                }}
              />
            ))}
          </div>

          <div className="app_content__box__right__info pt-3">
            <h5 className="app_content__box__right__info__title">
              {state.pillowColor.name}
            </h5>
            <p className="app_content__box__right__info__details">
              {state.pillowColor.info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
