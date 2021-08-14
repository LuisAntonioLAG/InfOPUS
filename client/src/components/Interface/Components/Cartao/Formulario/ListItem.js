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
        onChange = () => {}
    } = props

    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    const handleToggle = () => {
        setChecked((prevChecked) => !prevChecked);
      };

    return (

        isMobile===true ? ( 

          step === 1 ? (
          <ListItem key={`ID ${format}`} role={undefined} dense >
        <ListItemIcon className={classes.checkboxMargin} onClick={handleToggle}>
          <Checkbox 
            edge="start"
            checked={checked}
          />
        </ListItemIcon>
        <ListItemText primary={`${format}`} />
      </ListItem>
          )

          :
          
          (
          checked===true && (
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
            checked={checked}
          />
        </ListItemIcon>
        <ListItemText primary={`${format}`} />
        { checked===true &&
        <TextValidator size='small' variant = 'outlined' name={` ID ${format}`} label={`ID ${format}`} value = {value} onChange={onChange}
                  validators={['required']}
                  errorMessages={['Esse campo é obrigatório.']}
        />
        }
      </ListItem>)
      
    )


} 

export default CustomTextField