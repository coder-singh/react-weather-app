import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = "dabe58d28f041155aef36bc7d9a62d7d";
class App extends Component {

  state = {
    temperature0: undefined,
    temperature1: undefined,
    temperature2: undefined,
    temperature3: undefined,
    temperature4: undefined,
    city: undefined,
    country: undefined,
    humidity0: undefined,
    humidity1: undefined,
    humidity2: undefined,
    humidity3: undefined,
    humidity4: undefined,
    desc0: undefined,
    desc1: undefined,
    desc2: undefined,
    desc3: undefined,
    desc4: undefined,
    date0: undefined,
    date1: undefined,
    date2: undefined,
    date3: undefined,
    date4: undefined,
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
      this.setState({
        temperature0: data.list[0].main.temp,
        temperature1: data.list[8].main.temp,
        temperature2: data.list[16].main.temp,
        temperature3: data.list[24].main.temp,
        temperature4: data.list[32].main.temp,
        date0: data.list[0].dt_txt,
        date1: data.list[8].dt_txt,
        date2: data.list[16].dt_txt,
        date3: data.list[24].dt_txt,
        date4: data.list[32].dt_txt,
        city: data.city.name,
        country: data.city.country,
        humidity0: data.list[0].main.humidity,
        humidity1: data.list[8].main.humidity,
        humidity2: data.list[16].main.humidity,
        humidity3: data.list[24].main.humidity,
        humidity4: data.list[32].main.humidity,
        desc0: data.list[0].weather[0].description,
        desc1: data.list[8].weather[0].description,
        desc2: data.list[16].weather[0].description,
        desc3: data.list[24].weather[0].description,
        desc4: data.list[32].weather[0].description,
        error: undefined
      })
    }
    else if(city && country){
      this.setState({
        temperature0: undefined,
        temperature1: undefined,
        temperature2: undefined,
        temperature3: undefined,
        temperature4: undefined,
        date0: undefined,
        date1: undefined,
        date2: undefined,
        date3: undefined,
        date4: undefined,
        city: undefined,
        country: undefined,
        humidity0: undefined,
        humidity1: undefined,
        humidity2: undefined,
        humidity3: undefined,
        humidity4: undefined,
        desc0: undefined,
        desc1: undefined,
        desc2: undefined,
        desc3: undefined,
        desc4: undefined,
        error: "City not Found!!"
      })
    }
    else{
      this.setState({
        temperature0: undefined,
        temperature1: undefined,
        temperature2: undefined,
        temperature3: undefined,
        temperature4: undefined,
        date0: undefined,
        date1: undefined,
        date2: undefined,
        date3: undefined,
        date4: undefined,
        city: undefined,
        country: undefined,
        humidity0: undefined,
        humidity1: undefined,
        humidity2: undefined,
        humidity3: undefined,
        humidity4: undefined,
        desc0: undefined,
        desc1: undefined,
        desc2: undefined,
        desc3: undefined,
        desc4: undefined,
        error: "Please Enter City and Country"
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature0}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity0}
        description={this.state.desc0}
        date={this.state.date0}
        error={this.state.error}
        />
        <Weather 
        temperature={this.state.temperature1}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity1}
        description={this.state.desc1}
        date={this.state.date1}
        error={this.state.error}
        />
        <Weather 
        temperature={this.state.temperature2}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity2}
        description={this.state.desc2}
        date={this.state.date2}
        error={this.state.error}
        />
        <Weather 
        temperature={this.state.temperature3}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity3}
        description={this.state.desc3}
        date={this.state.date3}
        error={this.state.error}
        />
        <Weather 
        temperature={this.state.temperature4}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity4}
        description={this.state.desc4}
        date={this.state.date4}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
