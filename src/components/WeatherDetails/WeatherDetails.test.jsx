import React from 'react'
import { findByText, render } from '@testing-library/react'
import WeatherDetails from './WeadtherDetails'

test("WeatherDetails render", async () => {
    const { findByText } = render(<WeatherDetails humidity={80} wind={10} />)

    const wind = await findByText(/10/)

    const humidity = await findByText(/80/)

    expect(wind).toHaveTextContent("Viento: 10 km/h")
    expect(humidity).toHaveTextContent("Humedad: 80%")
})