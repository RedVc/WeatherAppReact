import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import ForecastItem from "./../ForecastItem"
import /* IconState, */ { validValues } from './../IconState'

const renderForcastItem = forecast => {
    const { weekDay, hour, state, temperature } = forecast

    /* key = identificador único */
    /* se va a poner una "marca" para encontrar cada item (ForecastItem) */
    return (
        <Grid
            data-testid="forecast-item-container"
            item
            key={`${weekDay}${hour}`}>
            <ForecastItem
                hour={hour}
                weekDay={weekDay}
                state={state}
                temperature={temperature}
            >

            </ForecastItem>
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
    return (
        <div>
            <Grid container
                justifyContent="space-around"
                alignItems="center"
            >
                {
                    forecastItemList.map(forecast => renderForcastItem(forecast))
                }
            </Grid>
        </div>
    )
}

/*  forecastItemList es un array de elementos
    deben tener forma en particular

    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf([validValues]).isRequired,
    temperature: PropTypes.number.isRequired
*/
Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf([validValues]).isRequired,
        temperature: PropTypes.number.isRequired
    })).isRequired
}

export default Forecast