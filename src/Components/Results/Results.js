import React from 'react';
import './Results.css'

//Destructuring props
const Results = ({ city, temperature, windSpeed, error, country, condition }) => {

return (
		
		//returning the result element with values
		<div className = 'myflex center bg-light-gray'>
		{city && <img className = 'imgcss' alt ='img' src = {`https://www.countryflags.io/${country}/shiny/64.png`}  />}
		{city && <p>City: {city}</p>}
		{city && <p>Temperature(C): {temperature}</p>}
		{city && <p>WindSpeed(km/h): {windSpeed}</p>}
		{city && <p>Condition: {condition}</p>}
		{error && <p>Note: {error}</p>}
		
		</div>

		
	);

}

export default Results;

