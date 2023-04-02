import Navbar from '../Navbar'
import { Document, Page } from "react-pdf";
import { useState } from 'react';

import pdf from "../PeterLam_resume.pdf";
function Resume (){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
      }
    
      function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }

      function previousPage() {
        changePage(-1);
      }
    
      function nextPage() {
        changePage(1);
      }
    
     

   return   <main className='px-8 md:px-20 lg:px-40'>
    
   <Navbar />

   <div style={{paddingTop:60}}>
     
      {/* <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        
        onLoadSuccess={onDocumentLoadSuccess}
        
      >
        <Page pageNumber={pageNumber} />
      </Document> */}

<object data={pdf} type="application/pdf" width="803" height="1000">
     
  </object>
      
   </div>


   </main>
}


export default Resume;