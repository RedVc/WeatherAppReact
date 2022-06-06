import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

const WeatherDatails = ({ humidity, wind }) => {
  return (
    <div>
      <Typography>Humedad: { humidity }%</Typography>
      <Typography>Viento: { wind } km/h</Typography>
    </div>
  )
}

WeatherDatails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherDatails
