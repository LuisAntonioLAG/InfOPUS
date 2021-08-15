import React, {forwardRef} from 'react';
import {Snackbar, Slide}  from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from './Snackbar.styles.js';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} variant="filled" {...props} ref={ref} />);

  function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
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
        <Snackbar open={open} TransitionComponent={SlideTransition} autoHideDuration={4000} anchorOrigin={{ vertical, horizontal }} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  }


  export default CustomizedSnackbars