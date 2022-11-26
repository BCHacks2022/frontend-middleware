import React, { useState } from "react";

export const SelectProvince = () => {
  const [selectedProvince, setSelectedProvince] = useState(
    "Select Your Province"
  );
  return (
    <div className="">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-violet-900 dark:text-white"
      >
        Select an option
      </label>

      <select
        id="countries"
        className=" bg-violet-50 border border-violet-300 text-white text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 bg-violet-700 border-violet-600 placeholder-violet-400 text-white focus:ring-white-500 focus:border-white-500"
        defaultValue={selectedProvince}
        onChange={(e) => setSelectedProvince(e.target.value)}
      >
        <option value="AB">Alberta</option>
        <option value="BC">British Columbia</option>
        <option value="MB">Manitoba</option>
        <option value="NB">New Brunswick</option>
        <option value="NL">Newfoundland and Labrador</option>
        <option value="NS">Nova Scotia</option>
        <option value="NT">Northwest Territories</option>
        <option value="NU">Nunavut</option>
        <option value="ON">Ontario</option>
        <option value="PE">Prince Edward Island</option>
        <option value="QC">Quebec</option>
        <option value="SK">Saskatchewan</option>
        <option value="YT">Yukon</option>
      </select>
    </div>
  );
};
