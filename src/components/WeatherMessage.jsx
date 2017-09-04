import React from 'react';

//1st variant
//function WeatherMessage(props) {
//  //var {temp, location} = this.props; можно было в таком виде записать, тогда в H3 можно было передать просто {temp} и {location}
//
//  return(
//    <h3>In {props.location} {props.temp} degrees</h3>
//  );
//}


//2nd variant
//let WeatherMessage = (props) => {
//  let {location, temp} = props;
//
//  return(
//    <h3>In {location} {temp} degrees</h3>
//  );
//}


//3rd variant
let WeatherMessage = ({location, temp}) => {
  return(
    <h3>In {location} {temp} degrees</h3>
  );
}

export default WeatherMessage;