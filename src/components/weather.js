import React from 'react';

class Weather extends React.Component{
    render(){
        var str = "images/"+ this.props.main + ".png";
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
        <div className="card" key={this.props.date}>
            {this.props.date && <div className="date">
                {day}
            </div>}
            <div className="info">
                {this.props.main && <div class="img"><img src = {str} /><span>{this.props.main}</span></div>}
                {this.props.temperature && <p>Temperature: {(this.props.temperature-273)|0} C</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
                {this.props.description && <p>Atmosphere: {this.props.description}</p>}
                {this.props.date && <p>Date: {this.props.date}</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        </div>
        )
    }
}

export default Weather;