const geolocationCallback = require('./geolocation-callback.js');
const weathernCallback = require('./weather-callback.js');
console.log('Running app-callback.js');

var address = 'Kochi';
geolocationCallback.getGeoLocation(address, (err, res) => {
    if(err){
        console.log(err);
    } else {
        console.log(res);
        weathernCallback.getWeather(res.location, (error, result) => {
            if (error){
                console.log(error);
            } else {
                console.log('The temprature is: ', result);
            }
        })
    }
});