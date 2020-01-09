//Install express server
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// Constants
const PORT = 8080;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/phoenix-platform'));
app.use(compression());

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/phoenix-platform/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(PORT);
console.log(`Running on port ${PORT}`);
