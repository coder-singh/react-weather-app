import React from 'react';

class Weather extends React.Component{
    render(){
        console.log(this.props.main)
        var str = "images/"+ this.props.main + ".png";
        return (
        <div className="card">
            {this.props.main && <p><img src = {str} />{this.props.main}</p>}
            {this.props.temperature && <p>Temperature: {(this.props.temperature-273)|0} C</p>}
            {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
            {this.props.description && <p>Atmosphere: {this.props.description}</p>}
            {this.props.date && <p>Date: {this.props.date}</p>}
            {this.props.error && <p>{this.props.error}</p>}
        </div>
        )
    }
}

export default Weather;