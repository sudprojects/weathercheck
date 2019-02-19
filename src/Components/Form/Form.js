import React from "react";
import './Form.css'

const Form = ({ onButtonSubmit }) =>{

return (

	<div>
	<p className = 'f3'>
	{'Enter a city name to check weather conditions'}
	</p>
	<div className = 'center'>
	
	<form className = 'form center pa4 br3 shadow-5' onSubmit={onButtonSubmit}>
		<input className = 'f4 pa2 w-70 center' type="text" name="city" placeholder="City..."/>
		<button className = 'w-40 grow f4 link ph3 pv2 dib white bg-light-purple'>Get Weather</button>
	</form>
	
	</div>
	</div>
	);

} 

export default Form;

