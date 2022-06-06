import React from 'react'
import Grid from '@mui/material/Grid'
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiRainMix } from "react-icons/wi"

const NotFoundPage = () => {
  return (
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
            <IconContext.Provider value={{ size: "6em" }} >
              <WiRainMix />
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
              404 | La página no existe
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
  )
}

export default NotFoundPage