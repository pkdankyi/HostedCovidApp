import React, { useState } from 'react'
import { Paper, Switch, Typography, Grid } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from '../App.js'

import styles from './DarkMode.module.css'

function DarkMode(){
    const [ darkMode, setDarkMode ] = useState(false)

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light"
        }
    })

    // handleOnChange(event){
    //     this.setState(setDarkMode: )
    // }

    return(
        <div className={styles.container}>
            <ThemeProvider theme={theme}>
                <Paper styles={{ height: "100%" }}>
                    <Grid container direction="column">
                        <Typography variant='h5'>EMBEDDED EDITION</Typography>
                        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                        <Typography subtitle='h8'> {darkMode ? 'Light theme' : 'Dark theme'}  </Typography>
                        <App />
                    </Grid>
                </Paper>
            </ThemeProvider>
        </div>
    )
}

export default DarkMode