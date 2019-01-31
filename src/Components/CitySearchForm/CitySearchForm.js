import React from 'react';
import './CitySearchForm.css'

const CitySearchForm = ({ onInputChange, onButtonSubmit  }) => {

return (
		<div>
		<p className = 'f3'>
		{'Enter a city name to check weather conditions'}
		</p>
		
		<div className = 'center'>
		<div className = 'form center pa4 br3 shadow-5'>
		
		<input className = 'f4 pa2 w-70 center' type = 'text' name = 'city' placeholder = 'City..' onChange = {onInputChange} />	
		<button className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick = {onButtonSubmit}> Search</button>

		</div>
		</div>

		</div>
	);

}

export default CitySearchForm;