import React, { useState } from 'react'
import { Paper, Switch, Typography, Grid } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from '../App.js'


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
        <ThemeProvider theme={theme}>
            <Paper styles={{ height: "100%" }}>
                <Grid container direction="column">
                    <Typography variant='h1'>DarkMode</Typography>
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}>Dark Mode</Switch>
                    <App />
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}

export default DarkMode