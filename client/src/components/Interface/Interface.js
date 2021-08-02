import React, { useState, useLayoutEffect } from 'react';
import { Paper } from '@material-ui/core';



import TopBar from './TopBar/TopBar.js';
import SideBar from './SideBar/SideBar.js'
import Routes from '../../Routes.js'


import { useStyles} from './Interface.styles.js';


const Interface = props => {
    const {
        menuItems = [],
    } = props;

    const classes = useStyles();

    //states

    const [open, setOpen] = useState(false);



    return(
      <div className={classes.root}>

        <TopBar open={open} setOpen={setOpen}/>

        <SideBar menuItems={menuItems} open={open} setOpen={setOpen}/>

        
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Paper className={classes.paper} elevation={4}>
                <Routes/>
            </Paper>
        </main>
      </div>
    );
}

export default Interface