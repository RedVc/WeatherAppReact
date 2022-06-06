import React from 'react'
import WeatherDatails from './WeatherDatails'

export default {
    title: "WeatherDetails",
    component: WeatherDatails
}

export const WeatherDatailsExample = () => {
    return <WeatherDatails humidity={10} wind={9} />
}