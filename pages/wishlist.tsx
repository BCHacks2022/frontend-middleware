import { company } from "../lib/models/company";
import { DeleteWishListModal } from "../components/wishlist/deleteFrom";
import { AddWishListModal } from "../components/AddWishListModal";
import { Deso } from "deso-protocol";
import {
  GetSingleProfileRequest,
  GetSingleProfileResponse,
} from "deso-protocol-types";
import { useEffect, useState } from "react";

async function getUser() {
  const res = localStorage.getItem("deso_user_key");
  return res;
}

export default function wishlist() {
  const [showModal, setShowModal] = useState(false);
  const [userResponse, setUserResponse] =
    useState<GetSingleProfileResponse | null>(null);
  const [userWish, setUserWish] = useState<company[]>([]);

  var deso: Deso;

  useEffect(() => {
    deso = new Deso();
    checkLogin();
  }, [null]);

  const checkLogin = async () => {
    // localStorage.setItem("wishlist", [])!
    const userKey = await getUser();
    if (userKey != "null") {
      var req = {
        PublicKeyBase58Check: userKey as string,
        NoErrorOnMissing: false,
      };
      var userProfile = await deso.user.getSingleProfile(req);
      setUserResponse(userProfile);
      getUserWish(userProfile);
    } else {
      // not logged in this page shouldn't be visible
      window.location.href = "/privacy";
    }
  };

  const getUserWish = async (p: GetSingleProfileResponse) => {
    if (
      p!.Profile!.ExtraData != null ||
      localStorage.getItem("wishlist") != null
    ) {
      var data = localStorage.getItem("wishlist")!;
      if (data) {
        var wishes = await JSON.parse(data);
        var compWishes: company[] = [];
        for (const [key, value] of Object.entries(wishes)) {
          console.log(value);
          var j = JSON.parse(value as string);
          compWishes.push(
            new company(j["image"], j["name"], j["link"], j["elId"], j["score"])
          );
        }
        setUserWish(compWishes);
      }
    }
  };

  const keyUpHandler = (e: any) => {
    var val = e.target.value as string;
    val = val.toLocaleUpperCase();
    for (var i = 0; i < userWish.length; i++) {
      var c = userWish[i] as company;
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

  const handleDelete = async (id: String) => {
    const animate = (start: number, end: number, el: any) => {
      if (start <= end) {
        el.style.display = "none";
        return;
      } else {
        el.style.left = start + "px";
        setTimeout(function () {
          animate(start - 70, end, el);
        }, 25);
      }
    };
    animate(0, -1500, document.getElementById(id as string)!);
    var data = await JSON.parse(localStorage.getItem("wishlist")!);
    var deletedIndex = -1;
    for (const [key, value] of Object.entries(data)) {
      var comp = JSON.parse(value as string);
      if (comp["elId"] == id) {
        delete data[key];
        break;
      }
    }
    console.log(data);
    localStorage.setItem("wishlist", JSON.stringify(data));
  };

  const addNewWL = (c: company) => {
    var wishes = [...userWish];
    wishes.push(c);
    setUserWish(wishes);
  };

  return (
    <div className="w-screen h-screen flex justify-center bg-white">
      <div className="overflow-x-auto mx-10 my-10  w-full relative shadow-md sm:rounded-lg bg-white">
        <div className="flex justify-between items-center py-4 bg-[#1d3557]">
          <div className="relative">
            <input
              onKeyUp={keyUpHandler}
              type="text"
              id="table-search-users companySrch"
              className="block p-2 mx-5 pl-3 w-80 text-sm text-gray-900 bg-[#1d3557] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for companies"
            />
          </div>
          <AddWishListModal userProfile={userResponse} addNewWL={addNewWL} />
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
          <tbody id="tbody_wl">
            {userWish.map((c: company) => {
              return (
                <tr
                  key={c.elId as string}
                  className="companyRow relative bg-white border-b dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-100 cursor-pointer"
                  id={c.elId as string}
                >
                  <th className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={c.image as string}
                    />
                    <div className="px-5 text-base font-semibold text-gray-600">
                      {c.name}
                    </div>
                  </th>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <a href={c.link as string} className="text-blue-600 ">
                        Link
                      </a>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <span>{c.score}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <button className="border border-blue-400 text-blue-400 font-bold uppercase text-xs px-6 py-3 rounded  hover:text-red-600 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      View
                    </button>
                    <DeleteWishListModal callback={handleDelete} comp={c} />
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
