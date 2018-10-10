import React from 'react';

class WeatherToday extends React.Component{
    render(){
        var date = new Date(this.props.date);
        
        var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var day = weekday[date.getDay()];
        return (
        <div className="main-card">
            {this.props.temperature && <div id="temperature">
                <img src = "images/clear.png"></img>
                <span> {(this.props.temperature-273).toFixed(0)}</span>
            </div>}
            <div id="description">{this.props.description}</div>
            {this.props.humidity && <div id="details">Humidity: {this.props.humidity}%<br />Date: {this.props.date}</div>}
        </div>
        )
    }
}

export default WeatherToday;