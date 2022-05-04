import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' //SUT Subject under testing
test("CityInfo render", async () => {
    // AAA
    // Arrange 
    // Act
    const city = "Buenos Aires"
    const country = "Argentina"
    const { findAllByRole } = render(<CityInfo city={ city } country={ country  } />)

    // Assert
    // findAllByRole nos va buscar (en este caso) todos los componentes que sean
    // "heading" => h1, h2, etc
    // El resultado es un array de componentes
    const cityAndCountryComponents = await findAllByRole("heading")

    //Cuando el test va a ser correcto?
    //Definicion
    //Cuando en el primer elemento se encuentre la ciudad "Buenos Aires"
    //y cuando en el segundo elemento se encuentre el pais Argentina

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
    
})