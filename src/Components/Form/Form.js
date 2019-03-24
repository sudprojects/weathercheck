import React from "react";
import './Form.css'

//Destructuring props
const Form = ({ onButtonSubmit }) =>{

return (

	//Welcome message for users of the app
	<div>
	<p className = 'f3'>
	{'Enter a city name to check weather conditions'}
	</p>

	{/* returning the input field and buttons with tachyons styling */}
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

