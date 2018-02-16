
 const geolocation = require('./geolocation');
 const fs=require('fs');
 
 
 var uriString = fs.readFileSync('./file.txt');
 var uri=uriString.toString();

 //var uri = 'https://maps.googleapis.com/maps/api/geocode/json';
 //var address = 'N6K0B2';
 //var key = 'AIzaSyAK0473bHr6gljmQKwJNFhq9DYQBtBL9WU';

 
geolocation.geolocations(uri, function (error) {
      
   if (error) {
             console.log(error);
        }
     else{
             console.log()
     }
  });



