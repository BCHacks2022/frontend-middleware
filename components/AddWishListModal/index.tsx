import { useEffect, useState } from "react";
import AddManualAccordion from "./AddManualAccordion";
import SearchAccordion from "./SearchAccordion";
import { GetSingleProfileRequest, GetSingleProfileResponse } from "deso-protocol-types";
import { Deso } from "deso-protocol";
import { company } from "../../lib/models/company";

export const AddWishListModal = ({ userProfile, addNewWL }: { userProfile: GetSingleProfileResponse | null, addNewWL: (c: company) => void }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="pr-4">
      <button
        className="block text-white bg-accent bg-opacity-90 hover:bg-opacity-70 focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add to WishList
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-primaryLight font-semibold">
                    Select Method of Adding to WishList
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <SearchAccordion
                    title="Search From List of Companies"
                    content="Content One"
                    isOpen={true}
                    user={userProfile}
                    addNewWl={addNewWL}
                  />
                  <AddManualAccordion content="ss" isOpen={false} addNewWl={addNewWL} />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent border border-red-500 rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};
