const request = require('request');
console.log("running geolocation")
var geolocations = (uri, callback) => {
    console.log("running geolocationfdsfdsfds");
    //uri += "?address=" + address + "&key=" +key;
    
    request(
        uri, 
        function (error, response, body) {
         
            if (!error && response.statusCode == 200) {
                var bodyObj = JSON.parse(body);
                console.log('body:',bodyObj.results[0].geometry.location); // Print the HTML for the Google homepage
            }
            else{
                return callback(error);
            }
            
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received     
        }
    );

}
var name = 'sumayya';
module.exports={
    geolocations,
    name
}


 