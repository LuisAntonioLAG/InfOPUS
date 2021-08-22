import React from 'react';
import Dropzone from 'react-dropzone';

import { Typography } from '@material-ui/core';

import { useTheme } from '@material-ui/styles';
import { alpha } from '@material-ui/core/styles';

import colors from '../../../../assets/themes/colors';



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
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = { ...baseStyle,
  borderColor: '#2196f3',
  borderStyle: 'solid',
  background: alpha('#2196f3',0.1)
};

const acceptStyle = { ...baseStyle,
  borderColor: colors.green3,
  borderStyle: 'solid',
  background: alpha(colors.green3,0.1)
};

const rejectStyle = { ...baseStyle,
  borderColor: '#ff1744',
  borderStyle: 'solid',
  background: alpha('#ff1744',0.1)
};


export default class MyDropzone extends React.Component {

  constructor(props) {
    super(props);
    this.onDrop = (files) => {
      this.setState({files})
      this.handleChange()
    };
    this.state = {
      files: [],
    };
  }


  handleChange(e) {

    // get the files
    let files = this.state.files;

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
          if(this.props.multiple) this.props.onDone(allFiles);
          else this.props.onDone(allFiles[0]);
        }

      } // reader.onload

    } // for

  }
  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop} noClick={this.props.noClick} noKeyboard={this.props.noKeyboard} disabled={this.props.disabled} accept={this.props.accept} maxSize={this.props.maxSize} minSize={this.props.minSize} maxFiles={this.props.maxFiles} multiple={this.props.multiple}>
        {({getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject}) => (
          <section >
            <div {...getRootProps({ style: (isDragAccept && acceptStyle )|| (isDragReject && rejectStyle) || (isDragActive && activeStyle) || baseStyle})}>
            <input {...getInputProps( {type:"file", onChange: this.handleChange.bind(this) ,multiple: this.props.multiple })} />
 
            <Typography color='textSecondary' align ='center' variant='body2'>Arraste a foto para cá, ou clique para escolher uma. </Typography>
      </div>
      <aside>
        <ul><Typography color='textSecondary' variant='caption'>{files}</Typography></ul>
      </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}


MyDropzone.defaultProps = {
  multiple: false,
  disabled: false,
};

