import React from "react"
import CityList from "./CityList"
import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
const cities = [
    { city : 'Buenos Aires', country : 'Argentina'},
    { city : 'Bogotá', country : 'Colombia'},
    { city : 'Madrid', country : 'España'},
    { city : 'Ciudad de México', country : 'México'},
]

test('Weather Render', async () => { 
    //AAA Act Assert
    const { findAllByRole } = render(<CityList cities={cities} />)

    
    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(cities.length)
}) 