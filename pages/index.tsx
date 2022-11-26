import { useState } from "react";
import { Dropdown } from "../components/Dropdown";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center bg-white">
      <Dropdown />
    </div>
  );
}
