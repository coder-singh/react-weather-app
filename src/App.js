import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles'
import Form from './components/form'
import WeatherGroup from './components/weatherGroup'
import API_KEY from './keys';

const list = [0, 8, 16, 24, 32];
class App extends Component {

  state = {
    temperature: [],
    city: undefined,
    country: undefined,
    humidity: [],
    description: [],
    date: [],
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&unit=metric`);
    
    //convert the response to JSON format
    const data = await api_call.json();
    //console.log(data);

    if(city && country && data.list){
      const temperature = list.map( item => {
        return data.list[item].main.temp
      })
      var date = list.map( item => {
       return data.list[item].dt_txt.slice(0, 10);
      })
      var humidity = list.map( item => {
       return  data.list[item].main.humidity;
      })
      var description = list.map( item => {
        return data.list[item].weather[0].description;
      })
      this.setState({
        temperature: temperature,
        date: date,
        city: data.city.name,
        country: data.city.country,
        humidity: humidity,
        description: description,
        error: undefined
      })
    }
    else if(city && country){
      this.setState({
        temperature: undefined,
        date: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "City not Found!!"
      })
    }
    else{
      this.setState({
        temperature: undefined,
        date: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter City and Country"
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather}/>
        <Titles city={this.state.city} country={this.state.country}/>
        <WeatherGroup 
        temperature={this.state.temperature}
        humidity={this.state.humidity}
        description={this.state.description}
        date={this.state.date}
        error={this.state.error}/>
      </div>
    );
  }
}

export default App;
