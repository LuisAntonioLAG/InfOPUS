import React, {useState} from 'react'
import { Dialog } from '@material-ui/core';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

import checklist from '../../../assets/pdfs/comercial/checklist_entrega.pdf'

const Checklist = ({open,setOpen}) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);

    const handleClose = () => {
        setOpen(false);
      };
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
        <Dialog open={open} onClose={handleClose}>
      <div>
        <Document
          file={checklist}
          loading={'Carregando PDF.'}
          error={'Não foi possível carregar o PDF.'}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      </Dialog>
    );
  }
export default Checklist