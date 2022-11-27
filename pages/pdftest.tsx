import { RentalCheckSection } from "../components/RentalCheckSection";
import { degrees, PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { useState } from "react";

export default function Home() {
    const [base64, setBase64] = useState<string | null>(null);

    const editPDF = async () => {
        const url = '/ra.pdf';
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(existingPdfBytes)
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
        const pages = pdfDoc.getPages()
        const firstPage = pages[0]
        const { width, height } = firstPage.getSize()
        firstPage.drawText('This text was added with JavaScript!', {
            x: 5,
            y: height / 2 + 300,
            size: 50,
            font: helveticaFont,
            color: rgb(0.95, 0.1, 0.1),
            rotate: degrees(-45),
        })

        const pdfBytes = await pdfDoc.save();
        var b64 = Buffer.from(pdfBytes).toString('base64');
        console.log(b64);

        setBase64(b64 as string);
    }

    async function createPdf() {
        const pdfDoc = await PDFDocument.create()
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

        const page = pdfDoc.addPage()
        const { width, height } = page.getSize()
        const fontSize = 30
        page.drawText('Creating PDFs in JavaScript is awesome!', {
            x: 50,
            y: height - 4 * fontSize,
            size: fontSize,
            font: timesRomanFont,
            color: rgb(0, 0.53, 0.71),
        })

        const pdfBytes = await pdfDoc.save()
    }

    return (
        <div className="w-screen h-screen  bg-white">
            <input type="button" className="bg-red-300 m-10 text-black" value="kjihuygtrdsd" onClick={editPDF} />
            <input type="button" className="bg-red-300 m-10 text-black" value="33333" onClick={createPdf} />
            {base64 ? (
                <iframe
                    title="frame"
                    width="500px"
                    height="600px"
                    className="m-10"
                    src={`data:application/pdf;base64,${base64}`} />) : (<span>aa</span>)

            }
        </div>
    );
}
