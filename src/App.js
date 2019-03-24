import React, { Component } from 'react';
import './App.css';
import Results from './Components/Results/Results';
import Form from './Components/Form/Form';


class App extends Component {

  // Defining the state object which will be used to change values of keys in case of valid inputs
  state = {
    city: undefined,
    temperature: undefined,
    windSpeed: undefined,
    error: undefined,
    country: undefined,

  }

  // Defining resetState object for resetting the keys in case of invalid input or bad response from api
  resetState = {
    city: undefined,
    temperature: undefined,
    windSpeed: undefined,
    error: undefined,
    country: undefined

  }

    onButtonSubmit = async (e) =>{
    e.preventDefault();
    
    //Taking input from user
    const city = e.target.elements.city.value;

    //Calling api and passing the city value
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1bec84f07e5892cf7f23526e832cdf46`);
    const data = await api_call.json();
    console.log('data:', data);
   
   //Checking the api response and setting the state values
    if(data.cod != '200'){
        this.setState(this.resetState);
        this.setState({ error: 'Please enter a valid city name'});
    }else{
        this.setState({
        city:data.name,
        temperature: data.main.temp,
        windSpeed: data.wind.speed,
        country: data.sys.country,
        condition: data.weather[0].description,
        error: ''
      });
    }

  }

  //Rendering the form and result component. Props are passed to the components
  render() {

      return (
      <div className="App">
      
      <Form onButtonSubmit = {this.onButtonSubmit} />
      <Results 
      city = {this.state.city}
      temperature = {parseInt(this.state.temperature - 273.15)}
      windSpeed = {parseInt(this.state.windSpeed *3.6)}
      error = {this.state.error}
      country = {this.state.country}
      condition = {this.state.condition} />

      </div>
      );
    }
    
  
}

export default App;
