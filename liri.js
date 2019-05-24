require("dotenv").config();



var keys = require("./keys.js");
var spotify = new spotify(keys.spotify);
var axios = require("axios");

var fs = require("fs");

var moment = require("moment");
moment().format();

var command = process.argv[2];
var input = process.argv[3];

switch (action) {
  case "concert-this":
  concertThis(input);
  break;
  case "spotify-this-song":
  spotifySong(input);
  break;
  case "movie-this":
  movieThis(input);
  break;
  case "do-what-it-says":
  doThis(input);
  break;
};

// Then run a request with axios to the OMDB API with the movie specified


function concertThis(input) {
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function(response) {
    for (var i = 0; i < response.data.length; i++){

      var date = response.data[i].datetime;
      var momentDate = (moment().format("MM/DD/YY"));

      var concertResults = 
      "----------------" + 
      "\nVenue Name: " + response.data[i].venue.name + 
      "\nVenue Location: " + response.data[i].venue.city +
      "\nConcert Date: " + momentDate
      console.log(concertResults);
    }
  });
}


function spotifySong (input) {
  spotify
  .search({ type: "track", query: input})
  .then(function(response) {
    for (var i = 0; i < 5; i++) {
      var spotifyResults = 

      "-------------" +

      "\nArtist: " + response.tracks.items[i].artists[0].name +
      "\nSong: " + response.tracks.items[i].name +
      "\nAlbum: " + response.tracks.items[i].album.name +
      "\nLink: " + response.tracks.items[i].preview_url;
    }
  })
}

function movieThis () {
  axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy")
  .then(function(response){
    var omdbResults = 
    "--------------" +
    "\nMovie Title: " + response.data.Title +
    "\nYear Released: " + response.data.Year +
    "\nIMDB Rating: " + response.data.imbdRating +
    "\nRotten Tomatoes Rating: " + response.data.Ratings.Value +
    "\nLanguage: " + response.data.Language +
    "\nPlot: " + response.data.Plot +
    "\nActors and Actresses: " + response.data.Actors;

    console.log(omdbResults);
  })
  .catch(function(error) {
    console.log(error);
  });

  if (userInput === undefined) {
    axios.get("https://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy")
    .then(function(response){
      var nobodyResults = 
      "------------------" +
      "\nMovie Title: " + response.data.Title +
      "\nYear of Release: " + response.data.Year + 
      "\nIMDB Rating: " + response.data.imbdRating + 
      "\nRotten Tomatoes Rating: " + response.data.Rating[1].Value +
      "\nLanguage: " + response.data.Language +
      "\nPlot: " + response.data.Plot +
      "\nActors and Actresses: " + response.data.Actors +
      "\nIf you haven't watched Mr. Nobody, then you should: <http://www.imdb.com/title/tt0485947/>" + 
      "\nIt's on Netflix.";
      console.log(nobodyResults);
    })
  };

  function doThis() {
    fs.readFile("random.txt", "utf8", function(error, data){
      if (error) {
        return console.log(error);
      }
    })
  }
  var dataArr = data.split(",");

  console.log(dataArr[0]);
  console.log(dataArr[1]);


  var verb = dataArr[0];
  var noun = dataArr[1];

  if (verb === "spotify-this-song") {
    spotifySong(noun);
  } else {
    throw err;
  }
  
};
