import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import { IconContext } from 'react-icons'
import Grid from '@mui/material/Grid'
import Link from "@mui/material/Link"
import { Link as LinkRouter } from "react-router-dom"
import Typography from "@mui/material/Typography"
import Toolbar from "@mui/material/Toolbar"
import { WiSolarEclipse } from "react-icons/wi"
import ErrorBoundary from "./../../generic/ErrorBoundary"

/* children es una palabra reservada para los elementos que se hubiquen entre el tag JSX de apertura y cierre */
const AppFrame = ({ children }) => {

    const iconContextSize = useMemo( () => ({ size: "2em" }), [] )

    return (
        <Grid container
            justifyContent="center">

            <AppBar position='sticky'>

                <Toolbar variant='dense' className='bg'>

                    <IconButton
                        color="inherit"
                        aria-label="menu">

                        <Link component={LinkRouter}
                            to="/main"
                            color="inherit"
                            aria-label='menu'>

                            <IconContext.Provider
                                value={iconContextSize}>

                                <WiSolarEclipse />
                            </IconContext.Provider>
                        </Link>
                    </IconButton>

                    <Typography variant='h6' color="inherit">

                        Clima
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid item
                margin={2}
                xs={12}
                sm={11}
                md={10}
                lg={8} >

                <ErrorBoundary>{children}</ErrorBoundary>
            </Grid>
        </Grid>
    )
}

/* node: cualquier elemento de React que sea válido */
AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame