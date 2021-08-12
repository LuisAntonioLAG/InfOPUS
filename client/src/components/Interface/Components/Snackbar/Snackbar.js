import React, {useState} from 'react';
import {Snackbar}  from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from './Snackbar.styles.js';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const CustomizedSnackbars = (props) => {
    const {
        severity = '',
        message = '',
        vertical = '',
        horizontal = '',
        open, setOpen = [],
    } = props;
  
    const classes = useStyles()
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    return (
      <>
        <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical, horizontal }} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  }


  export default CustomizedSnackbars