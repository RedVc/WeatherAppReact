import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

const template = (args) => <Weather { ...args } />

export const WeatherCloud = template.bind({})
WeatherCloud.args = { temperature: 10, state: "clouds" }
// emperature={10} state="clouds"

export const WeatherSunny = template.bind({})
WeatherSunny.args = { temperature: 10, state: "clear" }
// temperature={10} state="clear"