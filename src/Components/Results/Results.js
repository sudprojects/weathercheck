import React from 'react';
import './Results.css'

const Results = ({ city, temperature, windSpeed, error }) => {

return (
		<div className = 'flex flex-column w-34 center bg-light-gray'>
		
		{city && <p className = 'animated bounceInRight ani slow' >City: {city}</p>}
		{city && <p className = 'animated bounceInLeft ani slow' >temperature: {temperature}</p>}
		{city && <p className = 'animated bounceInUp ani slow' >windSpeed: {windSpeed}</p>}
		{error && <p>error: {error}</p>}
		</div>
		
	);

}

export default Results;