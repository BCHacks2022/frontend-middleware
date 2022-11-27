import { useState } from "react";
import { company } from "../../lib/models/company";
import { StringTextField } from "./stringTextfield";
import { FromOptions } from "./options";
import { DateField } from "./dateField";
import { degrees, PDFDocument, StandardFonts, rgb } from 'pdf-lib'

export const MissingFieldsModal = ({ callback, missingField }: { callback: (text: string) => void, missingField: String }) => {
    const [showModal, setShowModal] = useState(false);

    const fixes: any = {
        "utilities": ["Please select the person responsible for utilities:", <FromOptions options={["Landlord", "Tenant"]} />, "Utilities will be paid by: "],
        "landlord": ["Please enter landlords name", <StringTextField placeholder="Name" />, "Landlord's name: "],
        "tenant": ["Please enter tenants name", <StringTextField placeholder="Name" />, "Tenants's name: "],
        "starting_date": ["Please enter the starting date", <DateField />, " Rent will start on "],
        "ending_date": ["Please enter the ending date", <DateField />, "Rent will end on "],
        "rent_price": ["Please enter the rent", <StringTextField placeholder="Price" />, "Subject to the provisions of this Lease, the rent for the Property is "],
        "pay_day": ["Please enter the day to pay", <StringTextField placeholder="Day of the month" />, "Rent is to be paid on the following day of every month "],
        "rent_increase": ["Please enter the minimum notice before rent increase", <StringTextField placeholder="Number of days" />, "The Landlord may increase the Rent for the Property upon providing to the Tenant such notice this amount of days before"],
        "sec_dep": ["Please enter the security deposit", <StringTextField placeholder="Security Deposit" />, "On execution of this Lease, the Tenant will pay the Landlord a security deposit of "],
        "smoking": ["Is smoking allowed?", <FromOptions options={["Yes", "No"]} />, "Smoking:"],
        "pets": ["Are pets allowed?", <FromOptions options={["Yes", "No"]} />, "Pets: "],
    }

    return (
        <>
            <button
                onClick={() => { setShowModal(true) }}
                className="border justify-right item-right border-blue-400 text-blue-400 font-bold uppercase text-xs px-6 py-3 rounded  hover: outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Add
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-blue-400">{fixes[missingField as string][0]}</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    {fixes[missingField as string][1]}
                                </div>

                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-400 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="text-blue-400 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={(e) => {
                                            setShowModal(false);
                                            callback(fixes[missingField as string][2] + (document.getElementById("addRentalValue")! as HTMLInputElement).value);
                                        }}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};