const express = require('express');
const app = express();

// Fixes CORS error from connecting client.js to the same URl
const cors = require('cors');

// Middleware for CORS applied to all routes

// Tells express about CORS
app.use(cors());

// Applies CORS to all routes
app.options('*', cors());


app.get("/", function(req, res) {
	res.redirect("/omar");
});

app.get("/omar", function(req, res) {
	res.send(
		{
			"name": "Omar",
			"school": "Rensselaer Polytechnic Institute",
			"favorite_music_genre": "Hip Hop",
			"current_favorite_game": "Apex Legends",
			"age": "19",
			"field_of_study": "Computer Science and Cognitive Science"
		}
	);
});

// Sets up our server
// If you really want a server online COME TO OFFICE HOURS!
let port = process.env.PORT || 3000;
app.listen(port, function(req, res) {
	console.log('Server running on port 3000!');
});
