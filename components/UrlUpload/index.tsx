import React, { useState } from "react";

export const UrlUpload = () => {
  const [urlText, setUrlText] = useState(
    ""
  );

  return (

    <div className="flex flex-row w-full items-center space-x-2">
      <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Url</label>
      <br></br>
        <textarea 
          id="url" 
          className="bg-gray-50 p-2 w-11/12 h-10 border border-gray-300 text-gray-900 text-sm rounded-lg"   
          placeholder="Place text here">
        </textarea>
    </div>
    
    
  );
};
