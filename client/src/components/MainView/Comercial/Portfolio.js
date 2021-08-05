import React, {useState} from 'react'
import { Dialog } from '@material-ui/core';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

import portfolio from '../../../assets/pdfs/comercial/portfolio.pdf'

const Portfolio2 = ({open,setOpen}) => {

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <Dialog open={open} onClose={handleClose}>
      <div>
      <Document
      file={portfolio}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={'Carregando PDF.'}
      error = {'Não foi possível carregar página.'}
    >
      {Array.from(
        new Array(numPages),
        (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            loading={'Carregando página.'}
            error ={'Não foi possível carregar página'}
          />
        ),
      )}
    </Document>
      </div>
      </Dialog>
    );
  }
export default Portfolio2