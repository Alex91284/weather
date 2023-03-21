import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    components: CityList
}

const cities = [
    { city: "Popayán", country: "Colombia", countryCode: "CO"},
    { city: "Ciudad de Mexico", country: "Mexico", countryCode: "MX"},
    { city: "Cali", country: "Colombia", countryCode: "CO"},
    { city: "Lima", country: "Perú", countryCode: "PE"},
    { city: "La Plata", country: "Argentina", countryCode: "AR"},
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Clic en city")}/>