import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import CitySearchForm from './Components/CitySearchForm/CitySearchForm';
import Results from './Components/Results/Results';
import Form from './Components/Form/Form';


const particleConfig = {
      "particles": {
          "number": {
              "value": 50
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }


const city = '';
class App extends Component {

  state = {
    city: undefined,
    temperature: undefined,
    windSpeed: undefined,
    error: undefined,
    country: undefined

  }

  // onInputChange = (event) =>{
  //   this.setState({city: event.target.value});
  //   console.log(event.target.value);
  // }

  onButtonSubmit = async (e) =>{
    e.preventDefault();

      this.setState({
        city: undefined,
        temperature: undefined,
        windSpeed: undefined,
        error: undefined,
        country: undefined,
        condition: undefined
      });


    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1bec84f07e5892cf7f23526e832cdf46`);
    const data = await api_call.json();
    console.log('data:', data);
    //console.log(data.main.temp);
    if(data.cod != '200'){
        this.setState({
        city:undefined,
        temperature: undefined,
        windSpeed: undefined,
        country: undefined,
        condition: undefined,
        error: 'Please enter a valid city name'
      });

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

  render() {

      return (
      <div className="App">
      <Particles className = 'particles' params={particleConfig} />
      <Form onButtonSubmit = {this.onButtonSubmit} />
      <Results 
      city = {this.state.city}
      temperature = {parseInt(this.state.temperature - 273.15)}
      windSpeed = {parseInt(this.state.windSpeed *4.5)}
      error = {this.state.error}
      country = {this.state.country}
      condition = {this.state.condition}  />
      </div>
      );
    }
    
  
}

export default App;
// <Results city = {this.city} /> 
// <CitySearchForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />