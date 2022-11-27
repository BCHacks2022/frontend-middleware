import { Deso } from "deso-protocol";
import { GetSingleProfileResponse } from "deso-protocol-types";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavBarTile } from "./NavBarTile";

async function getUser() {
  const res = localStorage.getItem("deso_user_key");
  return res;
}

export const NavBar = () => {
  const [userReponse, setUserResponse] =
    useState<GetSingleProfileResponse | null>(null);
  var deso: Deso;
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deso = new Deso();
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const userKey = await getUser();
    console.log(userKey);
    if (userKey != "null") {
      var req = {
        PublicKeyBase58Check: userKey as string,
        NoErrorOnMissing: false,
      };
      var userProfile = await deso.user.getSingleProfile(req);
      console.log(1111);

      setUserResponse(userProfile);
    }
  };

  const handleDeso = async () => {
    console.log("userProfile");
    let user = await deso.identity.login();

    var req = { PublicKeyBase58Check: user.key, NoErrorOnMissing: false };
    var userProfile = await deso.user.getSingleProfile(req);

    setUserResponse(userProfile);
  };

  const handleLogout = async () => {
    const deso = new Deso();
    await deso.identity.logout(
      userReponse!.Profile?.PublicKeyBase58Check as string
    );
    setUserResponse(null);
    router.push("/privacy");
  };

  return (
    <nav className="bg-primary border-gray-200 px-2  rounded ">
      <div className="flex  justify-between">
        <div className="container flex flex-wrap  justify-start mx-auto">
          <a href="#" className="flex items-center">
            <Image
              src="/logolight.png"
              className=""
              alt="Soteria Logo"
              width={120}
              height={50}
            />
          </a>

          <div
            className="justify-start hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 content-start border border-primary rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary ">
              <NavBarTile text="Rental Contract" link="/" />
              <NavBarTile text="Privacy Policy" link="/privacy" />

              {userReponse ? (
                <NavBarTile text="Wishlist" link="/wishlist" />
              ) : (
                <div></div>
              )}
            </ul>
          </div>
        </div>
        <div className="flex mb-3 ml-5 pt-2 ">
          {!userReponse ? (
            <button
              type="button"
              onClick={handleDeso}
              className="text-white bg-accent hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
            >
              Sign In
            </button>
          ) : (
            <button
              type="button"
              onClick={handleLogout}
              className="text-white bg-accent w-40 hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-3 md:mr-5 "
            >
              Sign Out
            </button>
          )}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
