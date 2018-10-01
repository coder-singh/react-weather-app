import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles'
import Form from './components/form'
import WeatherGroup from './components/weatherGroup'
import WeatherToday from './components/weatherToday'
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
    main: [],
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&unit=metric`);
    
    //convert the response to JSON format
    const data = await api_call.json();
    console.log(data);

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
      var main = list.map( item => {
        return data.list[item].weather[0].main;
      })
      this.setState({
        temperature: temperature,
        date: date,
        city: data.city.name,
        country: data.city.country,
        humidity: humidity,
        description: description,
        main: main,
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
        main: undefined,
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
        main: undefined,
        error: "Please Enter City and Country"
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather}/>
        <Titles city={this.state.city} country={this.state.country}/>
        
        <WeatherToday
        temperature={this.state.temperature[0]}
        humidity={this.state.humidity[0]}
        description={this.state.description[0]}
        date={this.state.date[0]}
        main={this.state.main[0]}
        error={this.state.error}/>

        <WeatherGroup 
        temperature={this.state.temperature}
        humidity={this.state.humidity}
        description={this.state.description}
        date={this.state.date}
        error={this.state.error}
        main={this.state.main}/>
      </div>
    );
  }
}

export default App;
