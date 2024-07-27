import React , { useState } from "react";
import { Document, Page } from 'react-pdf';


const AboutUs = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);   
  
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };
  return (
    <div className='pdf_viewer'>
        <Document
            file="../assets/about-us.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  )
}

export default AboutUs