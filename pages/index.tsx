import { useState } from "react";
import { FileUpload } from "../components/FileUpload";
import { SelectProvince } from "../components/SelectProvince";
import wishlist from "./wishlist";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center bg-white">
      <div className="flex flex-row w-full items-center space-x-2 w-1/2 ">
        <FileUpload />
        <SelectProvince />
      </div>
    </div>
  );
}
