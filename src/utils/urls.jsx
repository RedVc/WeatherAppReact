
const appid = "1f8d12b92024ad713dea24ed54db405f"

export const getWeatherUrl = ({ city, countryCode }) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
export const getForecastUrl = ({ city, countryCode }) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`