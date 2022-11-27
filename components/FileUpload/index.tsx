import { ChangeEvent } from "react";

export const FileUpload = ({ onchange }: { onchange: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div className="flex items-center justify-center ">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-primary border-dashed rounded-lg cursor-pointer bg-primary bg-opacity-70   hover:bg-primaryLight "
      >
        <div className="flex flex-col items-center justify-center">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-light ">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-light">PDF, Microsoft Word</p>
        </div>
        <input
          id="file-upload"
          type="file"
          onChange={onchange}
          className="hidden"
          accept="application/pdf, application/msword"
        />
      </label>
    </div>
  );
};
