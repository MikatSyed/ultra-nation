import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);
    const{area,capital,name,flag,population,region} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country-details">
            <h4>This is {name}</h4>
            <img src={flag} alt=""/>
            <p>population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;