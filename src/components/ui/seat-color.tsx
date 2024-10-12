"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { NorthEast } from "../shared/svgs/icons";
import CategoryTag from "./category-tag";
import { seatColorOptions } from "@/utils/static";
import CategoryColor from "./category-color";
import { setChairColor } from "@/state/reducer";
import { AppContext } from "@/state/context";

export default function SeatColor() {
  const { dispatch, state } = useContext(AppContext);

  return (
    <div className="app_content__box app_content__box__ctt">
      <div className="app_content__box__left">
        <div className="px-4 py-11">
          <h3 className="app_content__box__left__title">
            Design Your perfect <br /> seat
          </h3>
        </div>
        <div className="app_content__box__left__docs px-4 py-5 flex flex-col gap-3">
          <p className="app_content__box__left__docs__text">
            Make it yours. Pick your layout and finishes. Customize your seat,
            colors, and chair legs
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
      <div className="app_content__box__right flex items-center flex-1">
        <div className="flex flex-col gap-4">
          <CategoryTag text="Seat color" />
          <p className="app_content__box__right__category">
            Chose your seat color
          </p>

          <div className="flex gap-2">
            {seatColorOptions.map((item) => (
              <CategoryColor
                key={item.id}
                activeColor={state.chairColor.color}
                color={item.color}
                layoutId="seat-color"
                onClick={() => {
                  dispatch(setChairColor(item));
                }}
              />
            ))}
          </div>

          <div className="app_content__box__right__info pt-3">
            <h5 className="app_content__box__right__info__title">
              {state.chairColor.name}
            </h5>
            <p className="app_content__box__right__info__details">
              {state.chairColor.info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
