import Image from "next/image";
import { NavBarTile } from "./NavBarTile";

export const NavBar = () => {
  return (
    <nav className="bg-primary border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div className="flex  justify-between">
        <div className="container flex flex-wrap  justify-start mx-auto">
          <a href="#" className="flex items-center">
            <Image
              src="/logolight.png"
              className=" mx-3 "
              alt="Soteria Logo"
              width={100}
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
              <NavBarTile text="Wishlist" link="/wishlist" />
            </ul>
          </div>
        </div>
        <div className="flex md:order-2 m-2 pl-5 ">
          <button
            type="button"
            className="text-white bg-accent hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            Sign In
          </button>
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
