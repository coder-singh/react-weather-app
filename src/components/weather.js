import React from 'react';

class Weather extends React.Component{
    render(){
        return (
        <div className="card">
            {this.props.city && <p>City: {this.props.city}</p>}
            {this.props.country && <p>Country: {this.props.country}</p>}
            {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
            {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
            {this.props.description && <p>Description: {this.props.description}</p>}
            {this.props.date && <p>Date: {this.props.date}</p>}
            {this.props.error && <p>{this.props.error}</p>}
        </div>
        )
    }
}

export default Weather;