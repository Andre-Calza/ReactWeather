var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
  <h3 className="text-center">A temperatura em {location} está em {temp} graus.</h3>
  );
};

module.exports = WeatherMessage;
