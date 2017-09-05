// -------------- Npm and node dependencies ---------------------------//
const mysql            = require('mysql'); //MySQL
// -------------------------------------------------------------------//

const connectionInfo   = {
  host: ( process.env.OPENSHIFT_MYSQL_DB_HOST || 'localhost'),
  user: ( process.env.OPENSHIFT_MYSQL_DB_USERNAME || 'root'),
  password: (process.env.OPENSHIFT_MYSQL_DB_PASSWORD || 'p61404'),
  database: (process.env.OPENSHIFT_GEAR_NAME || 'clabkidb'),
}

 
var connection;

var createMySQLConnection = function(){

	connection = mysql.createConnection(connectionInfo);
	connection.connect(function(err){
		if(!err){
			console.log("Database is connected");
		}
		else{
			console.log("Error connecting database");
			setTimeout(createMySQLConnection , 2000);
		}
	})

	connection.on('error', function(err) {
	    console.log('db error', err);
	    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
	      handleDataBaseDisconnect();                         
	    } else {                                      
	      throw err;                                 
	    }
	 });		
}

createMySQLConnection();


module.exports = connection;