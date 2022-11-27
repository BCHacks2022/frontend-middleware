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
    <div onClick={HandleOpening} className="rounded-xl pt-2">
      <div
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
        className="bg-gray-200 overflow-hidden transition-all duration-200"
      >
        <form>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <label
                htmlFor="privacypolicytextareaFormControlTextarea1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                privacypolicytextarea textarea
              </label>
              <textarea
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="privacypolicytextareaFormControlTextarea1"
                rows={3}
                placeholder="Your message"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddManualAccordion;
