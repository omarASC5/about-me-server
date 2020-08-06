// Access the omar route from our server
fetch('http://localhost:3000/omar')
	.then(function(res) {
		return res.json();
	})
	.then(function(myJson) {
		console.log(myJson);
	});