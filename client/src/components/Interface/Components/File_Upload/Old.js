  
import React, {useMemo, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { Typography } from '@material-ui/core';

import { alpha } from '@material-ui/core/styles';

import colors from '../../../../assets/themes/colors';
import { useTheme } from '@material-ui/styles';

const Dropzone = ( props ) => {
  const {
    dropzoneProps = {},
    multiple = Boolean,
    onDone = () => {}
  } = props

  const theme = useTheme()
  const [myFiles, setMyFiles] = useState([])

  const {acceptedFiles, getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone();

  const handleChange = (e) => {


    // get the files

    
    let files = e.target.files || acceptedFiles;

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

 
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#bfbfbf',
    borderStyle: 'dashed',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3',
    borderStyle: 'solid',
    background: alpha('#2196f3',0.1)
  };
  
  const acceptStyle = {
    borderColor: colors.green3,
    borderStyle: 'solid',
    background: alpha(colors.green3,0.1)
  };
  
  const rejectStyle = {
    borderColor: '#ff1744',
    borderStyle: 'solid',
    background: alpha('#ff1744',0.1)
  };

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <section className="container">
      <div {...getRootProps({style, onDrop: handleChange})}   >
        <input {...getInputProps({onChange: handleChange})} />
        <Typography color='textSecondary' align ='center' variant='body2'>Arraste a foto para cá, ou clique para escolher uma. </Typography>
      </div>
      <aside>
        <ul><Typography color='textSecondary' variant='caption'>{files}</Typography></ul>
      </aside>
    </section>
  );
}

export default Dropzone