import React, { useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
type AccordionProps = {
  title: string;
  content: string;
  isOpen: boolean;
};
const SearchAccordion = ({ title, content, isOpen }: AccordionProps) => {
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
        <h4 className="font-semibold">{title}</h4>
        {isOpened ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-gray-200 overflow-hidden transition-all duration-200"
      >
        <p className="p-4">{content}</p>
      </div>
    </div>
  );
};

export default SearchAccordion;
