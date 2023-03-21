import { useState, useEffect} from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utilis/urls'
import getAllWeather from '../utilis/transform/getAllWeather'
import { getCityCode } from './../utilis/utils'

const useCityList = (cities, allWeather, actions) => {
    //const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {

            const url = getWeatherUrl ({ city, countryCode })
          
            try {
                const propName = getCityCode(city, countryCode)

                //onSetAllWeather({ [propName]: {} })
                actions({ type: 'SET_ALL_WEATHER', payload: { [propName]: {} } })

                const response = await axios.get(url)

                const allWeatherAux = getAllWeather(response, city, countryCode)

                //setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux}))
                //onSetAllWeather(allWeatherAux)
                actions({ type: 'SET_ALL_WEATHER', payload: allWeatherAux })
                
            } catch (error) {
                if(error.response){// Errores que nos responde el server
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) {// Errores que suceden por no llegar al server
                    setError("Verifique la conectividad a Internet")
                } else {// Errores inesperados
                    setError("Error al cargar los datos")
                }
            }
                        
        }

        cities.forEach(({ city, countryCode }) => {
            if (!allWeather[getCityCode(city, countryCode)]) {
                setWeather(city, countryCode)
            }            
        });

    }, [cities, actions, allWeather])

    return { error, setError }
}

export default useCityList