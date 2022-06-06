import React, { useMemo } from 'react'
import WelcomeScreen from "./../components/WelcomeScreen"
import Grid from '@mui/material/Grid'
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiSolarEclipse } from "react-icons/wi"

const WelcomePage = () => {

  const iconContextSize = useMemo(() => ({ size: "6em" }), [] )

  return (
    <WelcomeScreen>
      <Grid
        container
        direction="column"
        justifyContent="center"
        className='full' >

        <div className="highlight">
          <Grid 
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center" >

            <Grid item>
              <IconContext.Provider value={ iconContextSize } >
                <WiSolarEclipse />
              </IconContext.Provider>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center" >

              <Typography
                variant='h4'
                color="inherit" >
                Clima
              </Typography>
              <Link
                color="inherit"
                aria-label='menu'
                component={RouterLink}
                to="/main" >
                Lista
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  )
}

export default WelcomePage