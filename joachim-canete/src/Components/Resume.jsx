import { Document, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume () {
    
    return (
        <>
            <Document
                    file='https://drive.google.com/file/d/1PzrjEco4eylO5kVK7tUY_FCRN293C3eS/view'
                />
        </>
    )
}