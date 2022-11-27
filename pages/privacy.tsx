import { DOMElement, useState } from "react";

export default function Home() {
  const submitUrl = () => {
    console.log((document.getElementById("url")! as HTMLInputElement).value);
  };

  const submitText = () => {
    console.log((document.getElementById("test")! as HTMLInputElement).value);
  };

  return (
    <div className="screen w-full h-screen  justify-center bg-white py-5">
      <div className="container py-0 px-10 mx-0 min-w-full flex flex-col items-center">
        <h3 className="title-font mx-5 sm:text-3xl text-3xl  font-medium text-gray-900">
          Paste URL to privacy policy
        </h3>
      </div>
      <div className="flex flex-row justify-center  items-center w-full space-x-4">
        <textarea
          id="url"
          className="bg-gray-50 p-2 w-2/3 h-10  border  border-gray-300 text-gray-900 text-sm rounded-lg"
          placeholder="Paste link to privacy policy here ..."
        ></textarea>
        <button
          type="button"
          className="text-white bg-primary justify-center font-medium rounded-lg content-center text-sm px-9 py-2.5 mt-2 mb-2 focus:outline-none hover:bg-opacity-80"
          onClick={submitUrl}
        >
          Search
        </button>
      </div>

      <div className="inline-flex justify-center items-center w-full">
        <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute left-1/2 px-3 font-medium text-gray-500 bg-white -translate-x-1/2">
          or
        </span>
      </div>

      <div className="container py-0 px-10 mx-0 min-w-full flex flex-col items-center">
        <h3 className="title-font mx-3 sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
          Paste privacy policy below
        </h3>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <textarea
          id="text"
          rows={10}
          className="p-7 mx-auto w-9/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Paste privacy policy here ..."
        ></textarea>
      </div>

      <div className="container py-0 px-10 mx-0 min-w-full flex flex-col items-center">
        <input
          type="button"
          className="text-white content-center bg-primary font-medium rounded-lg text-sm px-20 py-2.5 mt-2 mx-5 mb-2 focus:outline-none hover:bg-opacity-80"
          value="Submit"
          onClick={submitText}
        />
      </div>
    </div>
  );
}
