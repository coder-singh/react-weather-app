import React from 'react';

class Weather extends React.Component{
    render(){
        return (
        <div className="card">
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