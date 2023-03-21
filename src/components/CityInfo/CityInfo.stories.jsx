import React from 'react'
import 'typeface-roboto'
import CityInfo from './CityInfo'

export default {
    title: "CityInfo",
    component: CityInfo,
    argsTypes: {
        city: { control: { type: "text"}},
        country: { control: { type: "text"}}
    }
}

export const CityExample = (args) => <CityInfo {...args}></CityInfo>

CityExample.args = { city: "Popayán", country: "Colombia" }