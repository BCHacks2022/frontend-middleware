import { useState, useEffect } from "react";
import { AddWishListModal } from "../components/AddWishListModal";
import { company } from "../lib/models/company";
export default function wishlist() {
  // facebook, google, mlh
  const companies = [
    new company(
      "fb.png",
      "Facebook",
      "https://www.facebook.com/privacy/policy/",
      "fb-el"
    ),
    new company(
      "google.png",
      "Google",
      "https://policies.google.com/privacy?hl=en-US",
      "g-el"
    ),
    new company("mlh.png", "MLH", "https://mlh.io/privacy", "mlh-el"),
    new company(
      "amazon.png",
      "Amazon",
      "https://www.amazon.ca/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ",
      "am-el"
    ),
    new company(
      "snapchat.png",
      "Snapchat",
      "https://snap.com/en-US/privacy/privacy-policy",
      "sc-el"
    ),
    new company(
      "ig.png",
      "Instagram",
      "https://help.instagram.com/155833707900388",
      "ig-el"
    ),
  ];

  const keyUpHandler = (e: any) => {
    var val = e.target.value as string;
    val = val.toLocaleUpperCase();
    for (var i = 0; i < companies.length; i++) {
      var c = companies[i] as company;
      if (c.name.toUpperCase().indexOf(val) <= -1) {
        document.getElementById(c.elId as string)!.style.display = "none";
      } else {
        document.getElementById(c.elId as string)!.style.display = "table-row";
      }
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center bg-white">
      <div className="overflow-x-auto mx-10 my-10  w-full relative shadow-md sm:rounded-lg bg-white">
        <div className="flex justify-between items-center py-4 bg-gray-700 ">
          <div className="relative">
            <input
              onKeyUp={keyUpHandler}
              type="text"
              id="table-search-users companySrch"
              className="block p-2 mx-5 pl-1 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for companies"
            />
          </div>
          <AddWishListModal />
        </div>
        <table className="w-full text-sm text-left text-gray-500 bg-white">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Company
              </th>
              <th scope="col" className="py-3 px-6">
                Privacy Policy
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => {
              return (
                <tr
                  className="companyRow bg-white border-b dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-100 cursor-pointer"
                  id={c.elId as string}
                >
                  <th
                    scope="row"
                    className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-12 h-12 rounded-full"
                      src={c.image as string}
                      alt="Jese image"
                    />
                    <div className="px-5 text-base font-semibold text-gray-600">
                      {c.name}
                    </div>
                  </th>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <a href={c.link as string} className="text-blue-600 ">
                        {c.link}
                      </a>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      type="button"
                      data-modal-toggle="editUserModal"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:text-blue-400"
                    >
                      +
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
