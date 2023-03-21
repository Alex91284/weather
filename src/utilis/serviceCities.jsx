const cities = [
    { city: "Popayán", country: "Colombia", countryCode: "CO"},
    { city: "Ciudad de Mexico", country: "Mexico", countryCode: "MX"},
    { city: "Cali", country: "Colombia", countryCode: "CO"},
    { city: "Pasto", country: "Colombia", countryCode: "CO"},
    { city: "La Plata", country: "Argentina", countryCode: "AR"},
    { city: "Jalisco", country: "Mexico", countryCode: "MX"},
    { city: "Barranquilla", country: "Colombia", countryCode: "CO"},
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)