import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import getAllWeather from './../utils/transform/getAllWeather'
import { getCityCode } from "./../utils/utils"

const useCityList = ( cities, allWeather, actions ) => {

    /* primer nivel: los hooks deben ir aquí */
    //const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    /* se invoca la API, carga luego de renderizar */
    useEffect(() => {

        const setWeather = async (city, countryCode) => {

            const url = getWeatherUrl({ city, countryCode })

            try {

                const propName = getCityCode( city, countryCode )


                //onSetAllWeather({ [propName] : {}})
                actions({ type: "SET_ALL_WEATHER", payload: { [propName] : {}} })
                
                const response = await axios.get(url)
                
                const allWeatherAux = getAllWeather(response, city, countryCode)
                
                /*
                en vez de pasar al valor de una propiedad, se va a pasar una función en la cual el 
                parametro que es el estado de setAllWeather(el mismo allWeather), el nuevo valor es acumulativo
                */
               
               // set[VARIABLE_ESTADO](VARIABLE_ESTADO => VARIABLE_ESTADO+1) 
               // setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
               
               //onSetAllWeather( allWeatherAux )
               actions({ type: "SET_ALL_WEATHER", payload: allWeatherAux })               


            } catch (error) {

                if (error.response) { // errores de respuesta del servidor no esperado 
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) {
                    setError("Verifica tu conexión a internet")
                } else {
                    setError("Error al cargar los datos")
                }
            }
        }

        cities.forEach(({ city, countryCode }) => {
            if (!allWeather[getCityCode( city, countryCode )]) {
                
                setWeather(city, countryCode)
            }
        });

    }, [ cities, actions, allWeather ])

    return { error, setError }
}

export default useCityList