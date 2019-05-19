require("dotenv").config();

var keys = require("./keys.js");

var spotify = new spotify(keys.spotify);


//omdb axios request
var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);

var axios = require("axios");

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log()
  }
)

var concert = process.argv[2];
var song = process.argv[3];
var movie = process.argv[4];
var task = process.argv[5];


