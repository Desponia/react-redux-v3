import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
    renderWeather = cityData => {
        // if(!cityData) return;

        const temps = cityData.list.map( weather => weather.main.temp);
        const pressures = cityData.list.map( weather => weather.main.pressure);
        const humidities = cityData.list.map( weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        // console.log(cityData.city.coord)
        const name = cityData.city.name;
        return (
            <tr key={name}>
                <td>
                    <GoogleMap
                        containerElement={ <div style={ {height: `100%` } }/> } lon={lon} lat={lat}
                        mapElement={<div style={ {height: `100%` } }/>}
                    />
                </td>
                <td>
                    <Chart data={temps} color="orange" units="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%" />
                </td>
            </tr>
        )
    };
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// const weather = state.weather == {weather}
const mapStateToProps = ({weather}) => {
    // {weather: weather}
    return { weather }
};

export default connect(mapStateToProps)(WeatherList)