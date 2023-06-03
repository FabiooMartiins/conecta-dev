import React from 'react';
import { makeStyles } from '@mui/material';

import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Header from './components/Header'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        display: 'flex',
        width: '1200px',
        margin: '0 auto',
    }
})

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header></Header>
            <main className={classes.main}>
                <Navbar></Navbar>
                <Feed></Feed>
            </main>
        </div>
    )
}

export default Home;