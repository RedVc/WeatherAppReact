const cities = [
  { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
  { city: "San Ramón", country: "Costa Rica", countryCode: "CR" },
  { city: "La Esperanza, Piedades Norte", country: "Costa Rica", countryCode: "CR" },
  { city: "Madrid", country: "España", countryCode: "ES" },
  { city: "Palma", country: "España", countryCode: "ES" },
  { city: "Mosku", country: "Rusia", countryCode: "RU" },
  { city: "Paris", country: "Francia", countryCode: "FR" },
  { city: "Andorra la Vella", country: "Andorra", countryCode: "AD" },
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
  cities.filter(c => c.countryCode === countryCode)[0].country 
)