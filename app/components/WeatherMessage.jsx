var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
  <p>A temperatura em {location} está em {temp} graus.</p>
  );
};

module.exports = WeatherMessage;
