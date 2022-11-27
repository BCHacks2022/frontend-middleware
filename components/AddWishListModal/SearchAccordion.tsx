import React, { useState, useRef, useEffect } from "react";
import { GetSingleProfileRequest, GetSingleProfileResponse } from "deso-protocol-types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { company } from "../../lib/models/company";
import { desoAddressToECKeyPair } from "deso-protocol/src/lib/utils/Utils";
type AccordionProps = {
  title: string;
  content: string;
  isOpen: boolean;
  user: GetSingleProfileResponse | null
  addNewWl: (c: company) => void
};

const SearchAccordion = ({ title, content, isOpen, user, addNewWl }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(isOpen);
  const [height, setHeight] = useState<string>("0px");
  const contentElement = useRef(null);

  const [selectedCompanies, setSC] = useState<string[]>([]);

  useEffect(() => {
    getSavedWL();

  }, [null])

  const getSavedWL = async () => {
    var data = localStorage.getItem("wishlist");
    if (data) {
      var prev = await JSON.parse(data);
      var sc: string[] = [];
      for (const [key, value] of Object.entries(prev)) {
        sc.push(await JSON.parse(value as string)['name']);
      }
      console.log(sc);
      console.log(sc.indexOf('1'));
      setSC(sc);
    }
  }

  const companies = [
    new company(
      "fb.png",
      "Facebook",
      "https://www.facebook.com/privacy/policy/",
      "fb-el",
      "14"
    ),
    new company(
      "google.png",
      "Google",
      "https://policies.google.com/privacy?hl=en-US",
      "g-el",
      "25"
    ),
    new company("mlh.png", "MLH", "https://mlh.io/privacy", "mlh-el", "83"),
    new company(
      "ddg.png",
      "DuckDuckGo",
      "https://duckduckgo.com/privacy",
      "ddg-el",
      "93"
    ),
    new company(
      "amazon.png",
      "Amazon",
      "https://www.amazon.ca/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ",
      "am-el",
      "33"
    ),
    new company(
      "snapchat.png",
      "Snapchat",
      "https://snap.com/en-US/privacy/privacy-policy",
      "sc-el",
      "35"
    ),
    new company(
      "ig.png",
      "Instagram",
      "https://help.instagram.com/155833707900388",
      "ig-el",
      "20"
    ),
  ];


  const HandleOpening = () => {
    setOpened(!isOpened);

    setHeight(
      // @ts-ignore
      !isOpened ? `${contentElement.current.scrollHeight ?? ""}px` : "0px"
    );
  };

  company.prototype.toString = function dogToString() {
    return `{"name":"${this.name}", "elId": "${this.elId}", "image": "${this.image}", "link": "${this.link}", "score": "${this.score}"}`;
  };

  const addToWishList = (e: any, c: company) => {
    var data = localStorage.getItem("wishlist");
    e.currentTarget.parentElement.parentElement.style.display = "none";
    if (data) {
      var prev = JSON.parse(data);
      var sc: string[] = [];
      for (var i = 0; i < prev.length; i++) {
        sc.push(prev[i]['name']);
      }
      var i = prev != null ? Object.keys(prev).length : 0;
      prev[c.elId as string] = c.toString();
      user!.Profile!.ExtraData = prev;
      localStorage.setItem("wishlist", JSON.stringify(prev));
    } else {
      prev = { 0: c.toString() };
      user!.Profile!.ExtraData = { 0: c.toString() };
      localStorage.setItem("wishlist", JSON.stringify(prev));
    }
  };

  return (
    <div className="rounded-xl pt-2">
      <div
        onClick={HandleOpening}
        className={"bg-primary p-4 flex justify-between text-white rounded-xl"}
      >
        <h4 className="font-semibold">{title}</h4>
        {isOpened ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-white my-5 overflow-hidden transition-all duration-200"
      >
        <table>
          <tbody>
            {
              companies.map((c) => {
                if (selectedCompanies.indexOf(c.name as string) != -1) {
                  return;
                }
                return <tr className="companyRow relative m-5 hover:bg-gray-50 dark:hover:bg-gray-100 cursor-pointer" key={c.elId as string}>
                  <td><img className="w-12 inline-block h-12 rounded-full" src={c.image as string} /></td>
                  <td><span className="text-blue-400">{c.name}</span></td>
                  <td></td>
                  <td><button onClick={(e) => {
                    addToWishList(e, c)
                    addNewWl(c);
                  }
                  } className="ml-20 border border-blue-400 text-blue-400 font-bold uppercase text-xs px-6 py-3 rounded  hover:text-red-600 outline-none focus:outline-nonemb-1 ease-linear transition-all duration-150">
                    Add
                  </button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchAccordion;
