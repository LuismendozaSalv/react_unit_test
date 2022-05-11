import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const renderCityAndCountry = cityAndCountry => {
    const {city, country } = cityAndCountry

    return (
        <li key = { city }> 
            <CityInfo city={city} country={country} />
            <Weather temperature = { 10 } state = 'sunny' />
        </li>     
        )
}

const CityList = ({ cities }) => {
    return (
        <div>
            <ul>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
                }
            </ul>
        </div>  
    ) 
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList