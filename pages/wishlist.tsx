import { useState, useEffect } from "react";
import { company } from "../lib/models/company";
import { DeleteWishListModal } from "../components/wishlist/deleteFrom";
export default function wishlist() {
    const [showModal, setShowModal] = useState(false);

    // facebook, google, mlh
    const companies = [
        new company("fb.png", "Facebook", "https://www.facebook.com/privacy/policy/", "fb-el", "14"),
        new company("google.png", "Google", "https://policies.google.com/privacy?hl=en-US", "g-el", "25"),
        new company("mlh.png", "MLH", "https://mlh.io/privacy", "mlh-el", "83"),
        new company("ddg.png", "DuckDuckGo", "https://duckduckgo.com/privacy", "ddg-el", "93"),
        new company("amazon.png", "Amazon", "https://www.amazon.ca/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ", "am-el", "33"),
        new company("snapchat.png", "Snapchat", "https://snap.com/en-US/privacy/privacy-policy", "sc-el", "35"),
        new company("ig.png", "Instagram", "https://help.instagram.com/155833707900388", "ig-el", "20"),
    ];

    const keyUpHandler = (e: any) => {
        var val = e.target.value as string;
        val = val.toLocaleUpperCase();
        for (var i = 0; i < companies.length; i++) {
            var c = companies[i] as company;
            if (c.name.toUpperCase().indexOf(val) <= -1) {
                document.getElementById(c.elId as string)!.style.display = "none";
            } else {
                var obj = document.getElementById(c.elId as string);
                if (obj != null) {
                    obj.style.display = "table-row";
                }
            }
        }
    };

    const handleDelete = (id: String) => {
        const animate = (start: number, end: number, el: any) => {
            if (start <= end) {
                el.style.display = "none";
                return;
            } else {
                el.style.left = start + "px";
                setTimeout(function () {
                    animate(start - 70, end, el);
                }, 25)
            }
        }
        animate(0, -1500, document.getElementById(id as string)!);
    }

    return (
        <div className="w-screen h-screen flex justify-center bg-white">
            <div className="overflow-x-auto mx-10 my-10  w-full relative shadow-md sm:rounded-lg bg-white">
                <div className="flex justify-between items-center py-4 bg-[#1d3557]">
                    <div className="relative">
                        <input onKeyUp={keyUpHandler} type="text" id="table-search-users companySrch" className="block p-2 mx-5 pl-3 w-80 text-sm text-gray-900 bg-[#1d3557] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for companies" />
                    </div>
                    <input type="button" value="Add to Wishlist" className="border hover:bg-gray-700 cursor-pointer shadow text-white py-2 px-4 rounded mx-10" />
                </div>
                <table className="w-full text-sm text-left text-gray-500 bg-white">
                    <thead className="text-xs text-gray-700 uppercase bg-[#1d3557] dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6 w-[25%]">
                                Company
                            </th>
                            <th scope="col" className="py-3 px-6 w-[25%]">
                                Privacy Policy link
                            </th>
                            <th scope="col" className="py-3 px-6 w-[25%]">
                                Score
                            </th>
                            <th scope="col" className="py-3 px-6 w-[25%]">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            companies.map((c) => {
                                return (<tr key={c.elId as string} className="companyRow relative bg-white border-b dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-100 cursor-pointer" id={c.elId as string}>
                                    <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-12 h-12 rounded-full" src={c.image as string} alt="Jese image" />
                                        <div className="px-5 text-base font-semibold text-gray-600">{c.name}</div>
                                    </th>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center">
                                            <a href={c.link as string} className="text-blue-600 ">Link</a>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center">
                                            <span>{c.score}</span>
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <button className="border border-blue-400 text-blue-400 font-bold uppercase text-xs px-6 py-3 rounded  hover:text-red-600 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">View</button>
                                        <DeleteWishListModal callback={handleDelete} comp={c} />
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
