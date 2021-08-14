import React from 'react'
import {Button, ButtonGroup, Popper, MenuList, MenuItem, Grow, ClickAwayListener , Grid, Typography, Paper} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


import { useStyles} from './BotaoOpcoes.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faDownload, faExternalLinkAlt, faLink} from '@fortawesome/free-solid-svg-icons'

const BotaoOpcoes = (props) => {
    const {
        titulo='', 
        type='',
        IDsDownload = [], 
        IDsView = [],
        options = [],
        acess = '',
    } = props;

    
    const classes = useStyles();



    const [open, setOpen] = React.useState(false); 
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
      };
    
      const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
    
      const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
        };

        const handleButtonDownload = () => {
            const link = document.createElement("a");
            link.download = `${titulo}.download`;
            link.href = `https://drive.google.com/uc?export=download&id=${IDsDownload.filter(Boolean)[selectedIndex]}`;
            link.click();
          };

        const handleButtonView = () => {
            window.open(`https://drive.google.com/file/d/${IDsView.filter(Boolean)[selectedIndex]}/view`, "_blank", "noreferrer noopener")
        };

        const handleAcess = () => {
          window.open(`${acess}`, "_blank", "noreferrer noopener")
      };

        const icon = (
            <>
            {type === 'download' && <FontAwesomeIcon icon={faDownload}/> }
            {type === 'view' && <FontAwesomeIcon icon={faExternalLinkAlt}/>}
            {type === 'acess' && <FontAwesomeIcon icon={faLink}/>}
            </>
        )

        const color = `${type==='download' ? 'secondary' : 'primary'}`


        const handleButton = () => {
            type === 'download' ? handleButtonDownload() : (type === 'view' && handleButtonView())
        }
    
      

    return (
        <>
        {type !== 'acess' ?

        (<>
        {options.length > 1 ?
        (<Grid  container direction="row" alignItems="center">
        <Grid  item xs={12}>
          <ButtonGroup fullWidth variant="contained" color={color} ref={anchorRef}>
            <Button startIcon={icon} className={classes.fullWidth} size="small" onClick = {handleButton}><Typography variant='caption'>{options[selectedIndex]}</Typography></Button>
            <Button
            className={classes.dropOptions}
              size="small"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper placement='top-end' open={open} anchorEl={anchorRef.current} role={undefined} transition>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper >
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu" >
                      {options.map((options, index) => (
                        <MenuItem
                          key={options}
                          selected={index === selectedIndex}
                          onClick={(event) => handleItemClick(event, index)}
                        >
                          {options}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>)

      :

      (<Button variant='contained' color={color} startIcon={icon} className={classes.fullWidth} onClick = {handleButton}><Typography variant='caption'>{options[0]}</Typography></Button>)
      
      } 

      </>)

      : 
      
      (<Button variant='contained' startIcon={icon} className={classes.fullWidth} onClick = {handleAcess}><Typography variant='caption'>Link</Typography></Button>) 
      
      }



      </>

      )
    
    
    




}

export default BotaoOpcoes