// dropdown component

import React, { useState } from "react";
import { DropdownTile } from "./DropdownTile";

export const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");
  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <button
        className="text-white bg-purple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        onClick={handleDropDown}
      >
        Select Province
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className={`z-10 w-50 bg-primary rounded divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
          <DropdownTile title="Alberta" />
          <DropdownTile title="British Columbia" />
          <DropdownTile title="Manitoba" />
          <DropdownTile title="New Brunswick" />
          <DropdownTile title="Newfoundland and Labrador" />
          <DropdownTile title="Northwest Territories" />
          <DropdownTile title="Nova Scotia" />
          <DropdownTile title="Nunavut" />
          <DropdownTile title="Ontario" />
          <DropdownTile title="Prince Edward Island" />
          <DropdownTile title="Quebec" />
          <DropdownTile title="Saskatchewan" />
          <DropdownTile title="Yukon" />
        </ul>
      </div>
    </div>
  );
};
