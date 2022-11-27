import { useState, useEffect } from "react";
import { rentalIssue } from "../lib/models/rentalIssue";
import  rentalApiMockResponse  from "../lib/data/rentalApiMockResponse.json";
import { MissingFieldsModal } from "../components/missingFields/missingFieldsModal";

export default function Home() {

    const [rightsViolated, setRightsViolated] = useState(true);
    const [missing, setMissing] = useState<string[]>([]);
    const [warnings, setWarnings] = useState<string[]>([]);
    const [toAddToPDF, setToAddToPDF] = useState<string[]>([]);

    function getMissingField(){
        
    }

    function onClickAdd(event:any) {
        console.log('You clicked submit.');
        console.log(rentalApiMockResponse)
        var rowId = event.target.parentNode.parentNode.id;
        var arr = toAddToPDF
        arr.push(rowId);
        setToAddToPDF(arr)
        console.log(arr);
    }

    useEffect(() =>{
        setMissing(rentalApiMockResponse[0]['missing']);
        setWarnings(rentalApiMockResponse[0]['warning']);

    },[null]);

    return (
    <div className="w-screen h-screen flex justify-center flex-col bg-white">

        <div className="flex w-full items-center justify-center space-x-2 pt-12 ">
            <a href="#" className={`block w-11/12 justify-center p-6  border border-gray-200 rounded-lg shadow-md ${rightsViolated? 'bg-red-500' :'bg-green-500' }`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{rightsViolated ? "Your rights are being violated!" :"Your rights are not being violated"}</h5>
                <p className="font-normal text-white">{rightsViolated? "Add the missing fields above to complete the aggreement" :"Your rights are not being violated"}</p>
            </a>
        </div>

        <div className="flex w-full flex-col items-center ">

            <h1 className="title-font sm:text-2xl text-3xl mb-4 pt-3 font-medium text-gray-900">
            {rightsViolated? "The following rights are being violated:" :""}
            </h1>

            {missing.map((c) => {
            return (
                <div className="flex w-full items-center justify-center">
                {rightsViolated? (

                <div className="flex w-full items-center justify-center pt-3 ">
                    <a href="#" className={`block w-11/12 justify-center p-6  border border-gray-200 rounded-lg shadow-md ' }`}>
                        <div
                        key={c as string}
                        className="flex justify-between w-full"
                        id={c as string}
                        >
                            <div className="inline-block">
                                <svg className=" inline-block w-12 h-12" fill="#FF4136" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                <div className="px-5 inline-block text-xl item-left font-semibold text-gray-600">
                                    {c as string}
                                </div>
                            </div>

                        </div>
                    </a>
                </div>):(<div></div>)}
            </div>
            );
            })}


            

            <h1 className="title-font sm:text-2xl text-3xl pt-3 mb-4 font-medium text-gray-900">
            The following fields are missing from your agreement
            </h1>




            {warnings.map((c) => {
                return (

                    <div className="flex w-full items-center pt-3 justify-center">
                        <div className={` block w-11/12 p-6  border border-gray-200 rounded-lg shadow-md ' }`}>
                            <div
                            key={c as string}
                            className="flex justify-between w-full"
                            id={c as string}
                            >
                                <div className="inline-block">
                                    <svg className="w-12 h-12 inline-block" fill="#FFDC00" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    <div className="px-5 inline-block text-xl item-left font-semibold text-gray-600">
                                        {c as string}
                                    </div>
                                </div>
                                <MissingFieldsModal  callback={() => {}}/>
                            </div>
                        </div>
                    <br/>
                    </div>

                );
                })}
                    
            </div>
            <br/>


            
      </div>
    );
  }
  