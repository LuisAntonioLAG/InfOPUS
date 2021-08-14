import React from 'react'
import {ListItem, ListItemIcon, Checkbox, ListItemText} from '@material-ui/core'
import { TextValidator } from 'react-material-ui-form-validator'


import { useStyles } from './Formulario.styles'



const CustomTextField = (props) => {
    const {
        isMobile = {},
        step = '',
        format = '',
        value = {},
        checked, setChecked = [],
        onChange = () => {}
    } = props

    const classes = useStyles();


    const handleToggle = () => {
      const currentIndex = checked.indexOf(format);
      const newChecked = [...checked];

      if (value === '') {

      if (currentIndex === -1) {
        newChecked.push(format);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
      }
      };

    return (

        isMobile===true ? ( 

          step === 1 ? (
          <ListItem key={`ID ${format}`} role={undefined} dense >
        <ListItemIcon className={classes.checkboxMargin} onClick={handleToggle}>
          <Checkbox 
            edge="start"
            checked={checked.indexOf(format) !== -1}
          />
        </ListItemIcon>
        <ListItemText primary={`${format}`} />
      </ListItem>
          )

          :
          
          (
            checked.indexOf(format) !== -1 && (
            <TextValidator className={classes.margin} size='small' variant = 'outlined' name={` ID ${format}`} label={`ID ${format}`} value = {value} onChange={onChange}
                      validators={['required']}
                      errorMessages={['Esse campo é obrigatório.']}
            />
            ) 
          )

        )
      
        :

        (  
        <ListItem key={`ID ${format}`} role={undefined} dense >
        <ListItemIcon className={classes.checkboxMargin} onClick={handleToggle}>
          <Checkbox 
            edge="start"
            checked={checked.indexOf(format) !== -1}

          />
        </ListItemIcon>
        <ListItemText primary={`${format}`} />
        { checked.indexOf(format) !== -1 &&
        <TextValidator size='small' variant = 'outlined' name={` ID ${format}`} label={`ID ${format}`} value = {value} onChange={onChange}
                  validators={['required']}
                  errorMessages={['Esse campo é obrigatório.']}
        />
        }
      </ListItem>)
      
    )


} 

export default CustomTextField