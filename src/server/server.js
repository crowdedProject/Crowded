const app = require('./config/server-config.js');

let port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("server listening on port " + port);
});
