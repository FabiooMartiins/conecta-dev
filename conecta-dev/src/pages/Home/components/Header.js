import React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    appBar:{
        boxShadow: 'none'
    }
})

function Header() {
    const classes = useStyles();
    return (
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
            <Toolbar>
            </Toolbar>
        </AppBar>
    )
}

export default Header;