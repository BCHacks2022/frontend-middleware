import { useState, useEffect } from "react";
import { MissingFieldsModal } from "../components/missingFields/missingFieldsModal";
import { degrees, PDFDocument, StandardFonts, rgb, PDFPage, last } from 'pdf-lib'

export default function RentalAgreementOutPut({ missingFields, rentalAgreement }: { missingFields: string[] | null, rentalAgreement: File }) {

    const [rightsViolated, setRightsViolated] = useState(true);
    const [warnings, setWarnings] = useState<string[]>([]);
    const [base64, setBase64] = useState<string | null>(null);
    const [showPage, setShowPage] = useState<number | null>(0);
    const [lastPage, setPage] = useState<PDFPage | null>(null);
    const [numberOfClausesAdded, setnumberOfClausesAdded] = useState(0);
    const [new_pdf, setPDF] = useState<PDFDocument | null>(null);


    const messages: any = {
        "utilities": "The agreement doesn't specify who is responsible for the utility bills",
        "landlord": "The agreement doesn't specify Landlord's official name.",
        "tenant": "The agreement doesn't specify tenants's official name.",
        "starting_date": "The agreement doesn't specify the starting date of the rent.",
        "ending_date": "The agreement doesn't specify the ending date of the rent.",
        "rent_price": "The agreement doesn't specify the rent price.",
        "pay_day": "The agreement doesn't specify the day for rent payment.",
        "rent_increase": "The agreement doesn't specify the minimum number of days before rent increase.",
        "sec_dep": "The agreement doesn't specify the security deposit.",
        "smoking": "The agreement doesn't specify the rules around smoking.",
        "pets": "The agreement doesn't specify the rules around having pets.",
    }

    useEffect(() => {
        if (missingFields == null) {
            missingFields = [];
        }
        if (missingFields?.length == 0) {
            setRightsViolated(false);
        }
        console.log(messages["pets"]);
        loadPDF();
        const reader = new FileReader();
        console.log(reader.readAsDataURL(rentalAgreement));

    }, [null]);

    const fixMissingField = (text: string) => {
        editPDF(text);

    }

    const loadPDF = async () => {
        const url = '/ra.pdf';
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(existingPdfBytes)
        setPDF(pdfDoc);
        var page = pdfDoc!.addPage();
        setPage(page);
        const pdfBytes = await pdfDoc.save();
        var b64 = Buffer.from(pdfBytes).toString('base64');
        setBase64(b64 as string);
    }

    const editPDF = async (text: String) => {
        const url = '/ra.pdf';
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

        const { width, height } = lastPage!.getSize()
        lastPage!.drawText(text as string, {
            x: 50,
            y: height - 23 * (numberOfClausesAdded + 1),
            size: 23,
            color: rgb(0, 0.53, 0.71),
        });
        setnumberOfClausesAdded(numberOfClausesAdded + 1);
        const pdfBytes = await new_pdf!.save();
        var b64 = Buffer.from(pdfBytes).toString('base64');
        setBase64(b64 as string);
    }

    return (
        <div className="w-screen h-screen flex justify-center overflow-auto flex-col bg-white">
            <div className="flex justify-center">
                <button onClick={() => setShowPage(0)} className="inline-block border justify-right item-right border-blue-400 text-blue-400 font-bold uppercase text-xs px-6 py-3 rounded  hover: outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Violations</button>
                <button onClick={() => setShowPage(1)} className="inline-block border justify-right item-right border-blue-400 text-blue-400 font-bold uppercase text-xs px-6 py-3 rounded  hover: outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">PDF Preview</button>
            </div>
            {showPage == 0 ?
                (
                    <>
                        <div className="flex w-full items-center justify-center space-x-2 pt-12 ">
                            <a href="#" className={`block w-11/12 justify-center p-6  border border-gray-200 rounded-lg shadow-md ${rightsViolated ? 'bg-red-500' : 'bg-green-500'}`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{rightsViolated ? "Your rights are being violated!" : "Your rights are not being violated"}</h5>
                                <p className="font-normal text-white">{rightsViolated ? "Add the missing fields above to complete the aggreement" : "Your rights are not being violated"}</p>
                            </a>
                        </div>

                        <div className="flex w-full flex-col items-center overflow-auto">

                            <h1 className="title-font sm:text-2xl text-3xl mb-4 pt-3 font-medium text-gray-900">
                                {rightsViolated ? "The following rights are being violated:" : ""}
                            </h1>

                            {missingFields?.map((c) => {
                                return (
                                    <div key={c} className="flex w-full items-center justify-center">
                                        {rightsViolated ? (

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
                                                                {messages[c as string]}
                                                            </div>
                                                            <MissingFieldsModal callback={fixMissingField} missingField={c} />
                                                        </div>

                                                    </div>
                                                </a>
                                            </div>) : (<div key={c}></div>)}
                                    </div>
                                );
                            })}

                            {warnings?.map((c) => {
                                return (

                                    <div key={c} className="flex w-full items-center pt-3 justify-center">
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
                                                {/* <MissingFieldsModal callback={() => { }} /> */}
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                );
                            })}

                        </div>
                    </>
                )
                :
                (
                    <iframe
                        title="frame"
                        width="800px"
                        height="900px"
                        className="m-10"
                        src={`data:application/pdf;base64,${base64}`} />
                )

            }
        </div>
    );
}
