const request = require('request');

console.log('Running weather-callback.js');

module.exports.getWeather = (location, callback) => {
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&APPID=fc64c1edf54bf76c7ed5df9aae20a2a4&units=metric`;
    request(url, function (error, response, body) {
        if(error) {
            callback('Weather Not Available')
        } else {
            var bodyObj = JSON.parse(body);
            callback(undefined, bodyObj.main.temp);
        }
      });
}