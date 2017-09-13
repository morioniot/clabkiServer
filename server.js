
// -------------- Npm and node dependencies ---------------------------//
const express    = require('express'); //Web Server
const bodyParser = require('body-parser'); //Middleware
require('es6-promise').polyfill();  // ECMAScript 6 Promise
// -------------------------------------------------------------------//

// -------------- Local dependencies -----------------------------------//
const setRoutes = require('./Routes');
// --------------------------------------------------------------------//
const server = express();

const startExpress = function() {
	server.set("port", (process.env.OPENSHIFT_NODEJS_PORT || 5000));
	server.set("ip", (process.env.OPENSHIFT_NODEJS_IP || "localhost"))	
	server.listen(server.get("port"), server.get("ip"), function(){
		const currentDate = new Date();
		console.log("Server started: " + server.get("ip") + ":" + server.get("port") + "/" + " Date: " + currentDate);
	});
};


/// Data Parsing
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extender:true}));

setRoutes(server);

// 400 Resource Not Found
server.use( function(req, res, next) {
    res.status(400).send({error: "Resource Not Found"});
});

startExpress();






