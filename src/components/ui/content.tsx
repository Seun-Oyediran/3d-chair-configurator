import React from "react";
import SeatColor from "./seat-color";
import SeatMaterial from "./seat-material";
import PillowColor from "./pillow-color";
import EmptyBox from "./empty-box";
import LegsMaterial from "./legs-material";

export default function Content() {
  return (
    <div className="app_content">
      <EmptyBox big />

      <EmptyBox />

      <SeatColor />

      <EmptyBox />

      <SeatMaterial />

      <EmptyBox />

      <PillowColor />

      <EmptyBox />

      <LegsMaterial />

      <EmptyBox />

      <EmptyBox big />
    </div>
  );
}
