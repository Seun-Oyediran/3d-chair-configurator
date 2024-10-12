import React from "react";

interface IProps {
  big?: boolean;
}

export default function EmptyBox(props: IProps) {
  const { big = false } = props;

  return (
    <div className={`app_content__box  ${big ? "" : "app_content__box2"}`}>
      <div className="app_content__box__left"></div>
      <div className="app_content__box__right"></div>
    </div>
  );
}
