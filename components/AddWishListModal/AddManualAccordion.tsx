import React, { useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
type AccordionProps = {
  content: string;
  isOpen: boolean;
};
const AddManualAccordion = ({ content, isOpen }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(isOpen);
  const [height, setHeight] = useState<string>("0px");
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);

    setHeight(
      // @ts-ignore
      !isOpened ? `${contentElement.current.scrollHeight ?? ""}px` : "0px"
    );
  };
  return (
    <div className="rounded-xl pt-2 ">
      <div
        onClick={HandleOpening}
        className={"bg-primary p-4 flex justify-between text-white rounded-xl"}
      >
        <h4 className="font-semibold text-white">
          Add Privacy Policy Manually
        </h4>
        {isOpened ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-primary bg-opacity-10 overflow-hidden rounded-xl px-2  transition-all duration-200"
      >
        <form>
          <div className="flex justify-center flex-col">
            <div className="mb-3 xl:w-96">
              <label
                htmlFor="titleInput"
                className="form-label font-bold inline-block mb-2 text-gray-700"
              >
                Company Title
              </label>
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300  rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:border-2 focus:bg-white focus:border-primary focus:outline-none
      "
                id="titleInput"
                placeholder="Enter the name of the Company"
              />
            </div>
            <div className="mb-3 xl:w-96">
              <label
                htmlFor="privacypolicytext"
                className="form-label font-bold inline-block mb-2 text-gray-700"
              >
                Privacy Policy Text
              </label>
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:border-2 focus:outline-none"
                id="privacypolicytext"
                rows={7}
                placeholder="Paste your privacy policy here"
              ></textarea>
            </div>
            <div className="w-full flex justify-start">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 mb-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {}}
              >
                Add to WishList
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddManualAccordion;
