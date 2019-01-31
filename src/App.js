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
    error: undefined

  }

  // onInputChange = (event) =>{
  //   this.setState({city: event.target.value});
  //   console.log(event.target.value);
  // }

  onButtonSubmit = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1bec84f07e5892cf7f23526e832cdf46`);
    const data = await api_call.json();
    console.log(data);
    //console.log(data.main.temp);
    if(city){
        this.setState({
        city:data.name,
        temperature: data.main.temp,
        windSpeed: data.wind.speed,
        error: ''
      });

    }else{
        this.setState({
        city:undefined,
        temperature: undefined,
        windSpeed: undefined,
        error: 'Enter values'
      });
    }

console.log('CityName', this.state.city);

  }

  render() {

      return (
      <div className="App">
      <Particles className = 'particles' params={particleConfig} />
      <Form onButtonSubmit = {this.onButtonSubmit} />
      <Results 
      city = {this.state.city}
      temperature = {parseInt(this.state.temperature - 273.15)}
      windSpeed = {this.state.windSpeed}
      error = {this.state.error}  />
      </div>
      );
    }
    
  
}

export default App;
// <Results city = {this.city} /> 
// <CitySearchForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />