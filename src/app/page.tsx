import { Content } from "@/components/ui";
import React from "react";

export default function Home() {
  return (
    <main className="app_main">
      <div className="app_main__canvas"></div>
      <div className="app_main__ctt">
        <Content />
      </div>
    </main>
  );
}
