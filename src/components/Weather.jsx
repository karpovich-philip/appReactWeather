import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
      //location: 'Minsk',
      //temp: 19
    }
    //this.handleSearch = this.handleSearch.bind(this);
  }

  //handleSearch(location) {
  //  alert(location);
  //} //для того чтобы не привязывать в конструкторе this можно писать сразу стрелочные функции

  //handleSearch = location => this.setState({
  //  location: location,
  //  temp: 23
  //});

  handleSearch = (location) => {
    let that = this;

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function (temp) {

      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      that.setState({ isLoading: false });
      alert(errorMessage);
    });
  }

  render() {
    let { isLoading, temp, location } = this.state; //можно было в таком виде записать, тогда в WeatherMessage можно
                                                    // было передать как location={temp}

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    //<WeatherMessage location={this.state.location} temp={this.state.temp}/> вместо этой строки передаем пропсы через
    // функцию renderMessage

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm handleSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;