import React, { useState } from "react";

export const SelectProvince = () => {
  const [selectedProvince, setSelectedProvince] = useState("SL");
  return (
    <div>
      <label
        htmlFor="provinces"
        className="block mb-2 text-sm font-medium text-purple-900 dark:text-white"
      >
        Select an option
      </label>

      <select
        id="provinces"
        className=" bg-primary bg-opacity-80 border border-primary text-white text-sm rounded-lg focus:ring-primaryLight focus:border-primary  block w-full p-2.5  placeholder-primary text-white "
        onChange={(e) => setSelectedProvince(e.target.value)}
        defaultValue={selectedProvince}
      >
        <option value="SL">Select your province</option>
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
