import React, { useState, useRef, useEffect } from "react";
import { GetSingleProfileResponse } from "deso-protocol-types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { company } from "../../lib/models/company";
import Image from "next/image";
type AccordionProps = {
  title: string;
  content: string;
  isOpen: boolean;
  user: GetSingleProfileResponse | null;
  addNewWl: (c: company) => void;
};

export const companies = [
  new company(
    "/fb.png",
    "Facebook",
    "https://www.facebook.com/privacy/policy/",
    "fb-el",
    "14",
    `[
		[
		  "information and content you provide",
		  "neutral"
		],
		[
		  "we collect the content, communications and other information you provide when you use our products, including when you sign up for an account, create or share content, and message or communicate with others",
		  "neutral"
		],
		[
		  "this can include information in or about the content you provide (like metadata), such as the location of a photo or the date a file was created",
		  "neutral"
		],
		[
		  "it can also include what you see through features we provide, such as our camera, so we can do things like suggest masks and filters that you might like, or give you tips on using camera formats",
		  "neutral"
		],
		[
		  "our systems automatically process content and communications you and others provide to analyze context and what's in them for the purposes described below",
		  "negative"
		],
		[
		  "learn more about how you can control who can see the things you share",
		  "positive"
		],
		[
		  "data with special protections: you can choose to provide information in your facebook profile fields or life events about your religious views, political views, who you are interested in, or your health",
		  "neutral"
		],
		[
		  "this and other information (such as racial or ethnic origin, philosophical beliefs or trade union membership) could be subject to special protections under the laws of your country",
		  "neutral"
		],
		[
		  "networks and connections",
		  "neutral"
		],
		[
		  "we collect information about the people, accounts, hashtags and facebook groups, and pages you are connected to and how you interact with them across our products, such as people you communicate with the most or groups you are part of",
		  "neutral"
		],
		[
		  "we also collect contact information if you choose to upload, sync or import it from a device (such as an address book or call log or sms log history), which we use for things like helping you and others find people you may know and for the other purposes listed below",
		  "neutral"
		],
		[
		  "your usage",
		  "neutral"
		],
		[
		  "we collect information about how you use our products, such as the types of content you view or engage with; the features you use; the actions you take; the people or accounts you interact with; and the time, frequency and duration of your activities",
		  "neutral"
		],
		[
		  "for example, we log when you're using and have last used our products, and what posts, videos and other content you view on our products",
		  "neutral"
		],
		[
		  "we also collect information about how you use features like our camera",
		  "neutral"
		],
		[
		  "information about transactions made on our products",
		  "neutral"
		],
		[
		  "if you use our products for purchases or other financial transactions (such as when you make a purchase in a game or make a donation), we collect information about the purchase or transaction",
		  "neutral"
		],
		[
		  "this includes payment information, such as your credit or debit card number and other card information; other account and authentication information; and billing, shipping and contact details",
		  "neutral"
		],
		[
		  "things others do and information they provide about you",
		  "neutral"
		],
		[
		  "we also receive and analyze content, communications and information that other people provide when they use our products",
		  "neutral"
		],
		[
		  "this can include information about you, such as when others share or comment on a photo of you, send a message to you, or upload, sync or import your contact information",
		  "neutral"
		],
		[
		  "information we obtain from these devices includes: device attributes: information such as the operating system, hardware and software versions, battery level, signal strength, available storage space, browser type, app and file names and types, and plugins",
		  "neutral"
		],
		[
		  "device operations: information about operations and behaviors performed on the device, such as whether a window is foregrounded or backgrounded, or mouse movements (which can help distinguish humans from bots) identifiers: unique identifiers, device ids, and other identifiers, such as from games, apps or accounts you use, and family device ids (or other identifiers unique to meta company products associated with the same device or account)",
		  "neutral"
		],
		[
		  "device signals: bluetooth signals, and information about nearby wi-fi access points, beacons, and cell towers",
		  "neutral"
		],
		[
		  "data from device settings: information you allow us to receive through device settings you turn on, such as access to your gps location, camera or photos",
		  "neutral"
		],
		[
		  "network and connections: information such as the name of your mobile operator or isp, language, time zone, mobile phone number, ip address, connection speed and, in some cases, information about other devices that are nearby or on your network, so we can do things like help you stream a video from your phone to your tv.",
		  "neutral"
		]
	  ]`
  ),
  new company(
    "/google.png",
    "Google",
    "https://policies.google.com/privacy?hl=en-US",
    "g-el",
    "25",
    ""
  ),
  new company("/mlh.png", "MLH", "https://mlh.io/privacy", "mlh-el", "83", ""),
  new company(
    "/ddg.png",
    "DuckDuckGo",
    "https://duckduckgo.com/privacy",
    "ddg-el",
    "93",
    ""
  ),
  new company(
    "/amazon.png",
    "Amazon",
    "https://www.amazon.ca/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ",
    "am-el",
    "33",
    ""
  ),
  new company(
    "/snapchat.png",
    "Snapchat",
    "https://snap.com/en-US/privacy/privacy-policy",
    "sc-el",
    "35",
    ""
  ),
  new company(
    "/ig.png",
    "Instagram",
    "https://help.instagram.com/155833707900388",
    "ig-el",
    "20",
    ""
  ),
];

const SearchAccordion = ({ title, isOpen, user, addNewWl }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(isOpen);
  const [height, setHeight] = useState<string>("0px");
  const contentElement = useRef(null);

  const [selectedCompanies, setSC] = useState<string[]>([]);

  useEffect(() => {
    getSavedWL();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null]);

  const getSavedWL = async () => {
    var data = localStorage.getItem("wishlist");
    if (data) {
      var prev = await JSON.parse(data);
      var sc: string[] = [];
      for (const [key, value] of Object.entries(prev)) {
        sc.push(await JSON.parse(value as string)["name"]);
      }
      setSC(sc);
    }
  };

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
        sc.push(prev[i]["name"]);
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
            {companies.map((c) => {
              if (selectedCompanies.indexOf(c.name as string) != -1) {
                return;
              }
              return (
                <tr
                  className="companyRow relative m-5 hover:bg-gray-50 dark:hover:bg-gray-100 cursor-pointer"
                  key={c.elId as string}
                >
                  <td>
                    <Image
                      className="w-12 inline-block h-12 rounded-full"
                      alt="Company Logo"
                      width={48}
                      height={48}
                      src={c.image as string}
                    />
                  </td>
                  <td>
                    <span className="text-blue-400">{c.name}</span>
                  </td>
                  <td></td>
                  <td>
                    <button
                      onClick={(e) => {
                        addToWishList(e, c);
                        addNewWl(c);
                      }}
                      className="ml-20 border border-blue-400 text-blue-400 font-bold uppercase text-xs px-6 py-3 rounded  hover:text-blue-600 outline-none focus:outline-nonemb-1 ease-linear transition-all duration-150"
                    >
                      Add
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchAccordion;
