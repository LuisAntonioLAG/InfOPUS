import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  label: {
    position: 'absolute',
    bottom: 0,
    right: 0,


  },
}));

const UploadButton = (props) => {
    const {
        dropzoneProps = {},
        multiple = Boolean,
        onDone = () => {},
      } = props

  const classes = useStyles();

  const handleChange = (e) => {


    // get the files

    console.log('sas')

    
    let files = e.target.files

    // Process each file
    var allFiles = [];
    for (var i = 0; i < files.length; i++) {

      let file = files[i];

      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {

        // Make a fileInfo Object
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file,
        };

        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
        if(allFiles.length == files.length){
          // Apply Callback function
          if(multiple) onDone(allFiles);
          else onDone(allFiles[0]);
        }


      } // reader.onload

    } // for

}

  return (
    <>
      <input onChange={handleChange} accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label  htmlFor="icon-button-file">
        <IconButton style={{background:'black'}} className={classes.label} color="primary" component="span">
          <PhotoCamera  />
        </IconButton>
      </label>
    </>
  );
}

export default UploadButton