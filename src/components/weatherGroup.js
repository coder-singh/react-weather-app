import React from 'react';
import Weather from './weather';

const list = [1, 2, 3, 4];
var weatherIndexes;

class WeatherGroup extends React.Component{
    render(){
        if(this.props.temperature){
           weatherIndexes = list.map( item => {
                return (
                    <Weather 
                    temperature={this.props.temperature[item]}
                    humidity={this.props.humidity[item]}
                    description={this.props.description[item]}
                    date={this.props.date[item]}
                    main={this.props.main[item]}
                    error={this.props.error}
                    />
                )
           })
        }
        return (
            <div className="weatherGroup">
                {weatherIndexes}
            </div>
        );
    }
}

export default WeatherGroup;