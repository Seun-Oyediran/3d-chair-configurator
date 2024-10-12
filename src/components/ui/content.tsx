import React from "react";
import SeatColor from "./seat-color";
import SeatMaterial from "./seat-material";
import PillowColor from "./pillow-color";
import EmptyBox from "./empty-box";

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

      <EmptyBox big />
    </div>
  );
}
