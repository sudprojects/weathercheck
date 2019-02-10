import React from 'react';
import './Results.css'

const Results = ({ city, temperature, windSpeed, error, country, condition }) => {

return (
		
		<div className = 'myflex center bg-light-gray'>
		{city && <img alt ='img' src = {`https://www.countryflags.io/${country}/shiny/64.png`} 
		className = 'animated bounceInRight ani slow imgcss' />}
		{city && <p className = 'animated bounceInRight ani slow' >City: {city}</p>}
		{city && <p className = 'animated bounceInLeft ani slow' >Temperature(C): {temperature}</p>}
		{city && <p className = 'animated bounceInUp ani slow' >WindSpeed(km/h): {windSpeed}</p>}
		{city && <p className = 'animated bounceInUp ani slow' >Condition: {condition}</p>}
		{error && <p>Note: {error}</p>}
		
		</div>

		
	);

}

export default Results;

// <div className = 'flex flex-column w-34 center bg-light-gray'>