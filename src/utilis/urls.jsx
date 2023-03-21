
const apikey = "734ebf9a1b415d7d198931d0f97428ce"

export const getWeatherUrl = ({ city, countryCode }) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apikey}`
)

export const getForecastUrl = ({ city, countryCode }) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apikey}`
)