require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var fs = require('fs');
var inputString = process.argv;
var search = inputString[2];
var object=inputString[3];
var joined = [];


if (search==="spotify-this-song"){
  if(object === undefined){
    object = "The+Sign+Ace";
	}
  spotify.search({ type: 'track', query: object }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
    var song = data.tracks.items[0];
    for(i=0; i<song.artists.length; i++){
  console.log("Artist Name: "+song.artists[i].name); 
  console.log("Song Name: "+song.name);
  console.log("Album Name: "+song.album.name);
  console.log("Song Preview: "+song.preview_url);
  
    }
  });
}
else if (search==="concert-this"){
 
  axios.get("https://rest.bandsintown.com/artists/" + object + "/events?app_id=codingbootcamp").then(
function(response){
  console.log("Venue Name: "+response.data[0].venue.name);
  console.log("Venue Location: "+response.data[0].venue.city + ", " + response.data[0].venue.country);
  console.log("Concert Date: " + moment(response.data[0].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A'));
});


}
else if (search==="movie-this"){
  if(object === undefined){
    object = "Mr.Nobody";}
  axios.get("http://www.omdbapi.com/?t="+object+"&y=&plot=short&apikey=trilogy").then(
    function(response) {
    console.log("The movie's title is: " + response.data.Title);
    console.log("This movie came out in: " + response.data.Year);
      console.log("The movie's plot is: " + response.data.Plot);
      console.log("The movie's language is: " + response.data.Language); 
      console.log("The movie's country where produced is: " + response.data.Country);
      console.log("The movie's actors are: " + response.data.Actors);
      console.log("The movie's rotten tomato score is: " + response.data.Ratings[1].Value);
    }
  );
}
else if(search==="do-what-it-says"){

  fs.readFile('random.txt', "utf8", function(error, data){

    if (error) {
        return logIt(error);
      }

  
    var dataArr = data.split(",");
   if (dataArr[0]==="movie-this"){
     
      axios.get("http://www.omdbapi.com/?t="+dataArr[1]+"&y=&plot=short&apikey=trilogy").then(
        function(response) {
        console.log("The movie's title is: " + response.data.Title);
        console.log("This movie came out in: " + response.data.Year);
          console.log("The movie's plot is: " + response.data.Plot);
          console.log("The movie's language is: " + response.data.Language); 
          console.log("The movie's country where produced is: " + response.data.Country);
          console.log("The movie's actors are: " + response.data.Actors);
          console.log("The movie's rotten tomato score is: " + response.data.Ratings[1].Value);
        }
      );
    }
     if (dataArr[0]==="concert-this"){
 
      axios.get("https://rest.bandsintown.com/artists/" + dataArr[1] + "/events?app_id=codingbootcamp").then(
    function(response){
      console.log("Venue Name: "+response.data[0].venue.name);
      console.log("Venue Location: "+response.data[0].venue.city + ", " + response.data[0].venue.country);
      console.log("Concert Date: " + moment(response.data[0].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A'));
    });
  }
   if (dataArr[0]==="spotify-this-song")
     spotify.search({ type: 'track', query: dataArr[1] }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
    var song = data.tracks.items[0];
    for(i=0; i<song.artists.length; i++){
  console.log("Artist Name: "+song.artists[i].name); 
  console.log("Song Name: "+song.name);
  console.log("Album Name: "+song.album.name);
  console.log("Song Preview: "+song.preview_url);
  
    }
  });
  
    })
}
fs.appendFile("log.txt", search + " " + joined.join(' ') +
"\n",
function (err) {

    if (err) {
        return console.log("error")
    }
  })
