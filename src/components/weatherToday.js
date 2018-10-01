import React from 'react';

class WeatherToday extends React.Component{
    render(){
        return (
        <div className="main-card">
            {this.props.temperature && <div id="temperature">
                <img src = "images/clear.png" width="60px"></img>
                <span> {(this.props.temperature-273).toFixed(0)}</span>
            </div>}
            <div id="description">{this.props.description}</div>
            {this.props.humidity && <div id="details">Humidity: {this.props.humidity}% Date: {this.props.date}</div>}
        </div>
        )
    }
}

export default WeatherToday;