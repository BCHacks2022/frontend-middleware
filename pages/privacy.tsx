import { useState } from "react";
import { TextUpload } from "../components/TextUpload";
import { UrlUpload } from "../components/UrlUpload";

export default function Home() {

  const submitUrl = (e) =>{
    console.log(document.getElementById("url").value);
  }

  const submitText = (e) =>{
    console.log(document.getElementById("test").value);
  }

  return (
    <div className="screen h-screen  justify-center bg-white my-5">
      <div className="space-x-3 mx-10 content-center w-full">
        
        <h2 className="title-font mx-3 sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Paste URL to privacy policy
        </h2>
      
        <div className="flex  w-full items-center  ">
          
          <textarea 
            id="url" 
            className="bg-gray-50 p-2 w-5/6 h-10 border border-gray-300 text-gray-900 text-sm rounded-lg"   
            placeholder="Place text here">
          </textarea>

          <button 
            type="button" 
            className="text-white bg-blue-700 font-medium rounded-lg text-sm px-9 py-2.5 mt-2 mx-5 mb-2" 
            onClick={submitUrl}>
              Search
          </button>
        </div>

      </div>


      <br />
      <br />

      <div className="space-x-3 mx-10 content-center w-full">
          <h2 className="title-font mx-3 sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Paste privacy policy below
          </h2>
      </div>
      <div className=" space-x-1 mx-12">

        <div className="items-center justify-center w-full">

          <textarea 
            id="text" rows={10} 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Paste URL here ..."
            >
          </textarea>
      
        </div>  
      </div>

      <div className="space-x-3 content-center w-full">
      <input 
            type="button" 
            className="text-white  bg-blue-700 font-medium rounded-lg text-sm px-20 py-2.5 mt-2 mx-5 mb-2" 
            value="Submit" 
            onClick={submitUrl} />
      </div>


    </div>
  );
}
