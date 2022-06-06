import { validValues } from './../../components/IconState'
import { getCityCode, toCelsius } from './../utils'


const getAllWeather = (response, city, countryCode) => {
    // obtenemos el data que devuelve el url (response) 
    const { data } = response

    // obtenemos el temperature de data, hay que bajar por niveles hasta temp 
    const temperature = toCelsius(data.main.temp)

    const humidity = data.main.humidity
    const wind = data.wind.speed

    // se pasa a minuscula porque viene con mayúscula 
    const stateFromServer = data.weather[0].main.toLowerCase()

    const state = validValues.includes(stateFromServer) ? stateFromServer : null

    const propName = getCityCode(city, countryCode)

    /* este es el objeto de resultado final */
    const propValue = { temperature, state, humidity, wind }


    //    en vez de pasar al valor de una propiedad, se va a pasar una función en la cual el 
    //    parametro que es el estado de setAllWeather(el mismo allWeather), el nuevo valor es acumulativo

    // set[VARIABLE_ESTADO](VARIABLE_ESTADO => VARIABLE_ESTADO+1) 
    return ({ [propName]: propValue })
}

export default getAllWeather