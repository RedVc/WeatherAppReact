import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Alert from "@mui/material/Alert"
import Grid from '@mui/material/Grid'
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem'
import useCityList from './../../hooks/useCityList'
import CityInfo from "./../CityInfo"
import Weather from "./../Weather"
import { getCityCode } from './../../utils/utils'
import { useWeatherDispatchContext, useWeatherStateContext } from '../../WeatherContext'

const CityListItem = memo(({ city, country, countryCode, weather, eventOnClickCity }) => {
    return (
        <ListItem
            button
            
            onClick={() => eventOnClickCity(city, countryCode)} >

            <Grid
                container
                justifyItems="center"
                alignItems="center">

                <Grid
                    item
                    md={9}
                    xs={12}>

                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid
                    item
                    md={3}
                    xs={12}>

                    <Weather temperature={weather && weather.temperature} state={weather && weather.state} />

                </Grid>
            </Grid>

        </ListItem>
    )
})

CityListItem.displayName = "CityListItem"

/* 
    renderCityAndCountry se va a convertir en una función que retorna otra función
*/
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {

    const { city, countryCode } = cityAndCountry

    return <CityListItem 
        key={getCityCode(city, countryCode)}
        eventOnClickCity={eventOnClickCity}
        weather={weather}
        {...cityAndCountry} /* desestructura el objeto, lo que hace que se pase su contenido */
    />
}

/* cities: es un array, en cada item debe tener city y country */
/* ul: tag html para listas no ordenadas */
/* useEffect administra el momento de la solicitud al servidor */
/* useState establece el estado dependiendo de lo que provenga del servidor */
const CityList = ({ cities, onClickCity }) => {

    const actions = useWeatherDispatchContext()
    const data = useWeatherStateContext()
    const { allWeather } = data
    const { error, setError } = useCityList(cities, allWeather, actions)

    return (

        <div>
            {
                error && <Alert onClose={() => setError(null)} severity='error'>{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default memo(CityList)