const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=cc27dfb787fafd6785b1b7d58018fbb3&query=${latitude},${longitude}&units=m`;
  
  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!');
    } else if (error) {
      callback('Unable to find location. Try another search.')
    } else {
      callback(undefined, `${body.current.weather_descriptions}. It is currently ${body.location.localtime}. Weather temperature is ${body.current.temperature} degrees Celsius, but it feels like ${body.current.feelslike}. Humidity is ${body.current.humidity}.`)
    }
  });
}

module.exports = forecast;