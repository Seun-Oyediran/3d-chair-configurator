"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";

interface IProps {
  img: string;
  layoutId?: string;
  activeMaterial: string;
  onClick: () => void;
  value: string;
}

export default function CategoryImage(props: IProps) {
  const { activeMaterial, img, onClick, layoutId, value } = props;

  return (
    <div className="app_category_options">
      <button
        className="app_category_options__item"
        type="button"
        onClick={onClick}
      >
        <div className="app_category_options__item__img">
          <img src={img} alt={value} />
        </div>
        {activeMaterial === value && (
          <motion.div
            layoutId={`app_colors_${layoutId}`}
            className="app_category_options__item__border"
          />
        )}
      </button>
    </div>
  );
}
