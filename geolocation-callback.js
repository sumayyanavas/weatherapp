const request = require('request');

console.log('Running geolocation-callback.js');

module.exports.getGeoLocation = (address, callback) => {
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAK0473bHr6gljmQKwJNFhq9DYQBtBL9WU`;
    request(url, function (error, response, body) {
        if(error) {
            callback('Address Not Found')
        } else {
            var bodyObj = JSON.parse(body);
            var res = {
                address: bodyObj.results[0].formatted_address,
                location: bodyObj.results[0].geometry.location
            }


            callback(undefined, res);
        }
      });
}