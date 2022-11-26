import React, { useState } from "react";

export const TextUpload = () => {
  const [uploadedText, setUploadedText] = useState(
    ""
  );


  return (
    <div className="items-center justify-center w-full">
        <h2 className="title-font mx-3 sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Upload your Rental Agreement
        </h2>
        <textarea 
          id="message" rows={10} 
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Paste URL here ..."
          >
        </textarea>
    </div>
  );
};
