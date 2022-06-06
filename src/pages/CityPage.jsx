import React, { useMemo } from 'react'
import Grid from "@mui/material/Grid"
import LinearProgress from "@mui/material/LinearProgress"
import Paper from '@mui/material/Paper'
import AppFrame from "./../components/AppFrame"
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from "./../components/WeatherDetails"
import ForecastChart from "./../components/ForecastChart"
import Forecast from "./../components/Forecast"
import useCityPage from './../hooks/useCityPage'
import useCityList from "./../hooks/useCityList"
import { getCityCode } from "./../utils/utils"
import { getCountryNameByCountryCode } from "./../utils/serviceCities"
import { useWeatherDispatchContext, useWeatherStateContext } from './../WeatherContext'

const CityPage = () => {

  const actions = useWeatherDispatchContext()
  const data = useWeatherStateContext()

  const { allWeather, allChartData, allForecastItemList } = data
  //const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions
  const { city, countryCode } = useCityPage(allChartData, allForecastItemList, actions)

  /* useMemo: recibe una función y una lista de dependencias */
  /* retorna una nueva instancia del objeto hasta que cambie */
  const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])

  useCityList(cities, allWeather, actions)

  const cityCode = getCityCode(city, countryCode)

  const weather = allWeather[cityCode]
  const chartData = allChartData[cityCode]
  const forecastItemList = allForecastItemList[cityCode]

  const country = getCountryNameByCountryCode(countryCode)
  const humidity = weather && weather.humidity
  const wind = weather && weather.wind
  const state = weather && weather.state
  const temperature = weather && weather.temperature

  return (
    <AppFrame>
      <Grid
        container
        justifyContent="space-around"
        direction="column"
        marginTop={1}
        spacing={2} >
        <Paper
          elevation={10}>

          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="flex-end" >

            <CityInfo city={city} country={country} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="center" >

            <Weather state={state} temperature={temperature} />

            {
              humidity && wind &&
              <WeatherDetails humidity={humidity} wind={wind} />
            }
          </Grid>
          <Grid item>
            {
              !chartData && !forecastItemList && <LinearProgress />
            }
          </Grid>
          <Grid
            item
            alignContent="center" >

            {
              chartData && <ForecastChart data={chartData} />
            }
          </Grid>
          <Grid
            item >

            {
              forecastItemList && <Forecast forecastItemList={forecastItemList} />
            }
          </Grid>
        </Paper>
      </Grid>
    </AppFrame>
  )
}

export default CityPage