
// -------------- Local dependencies ---------------------------//
const connection  = require('../../Models/init.js')
// -------------------------------------------------------------------//

const petModel = {};


petModel.reportAsLost = function (petData, callback) {
	if(connection){
		const major = petData.major;
		const minor = petData.minor;
		const owner_id = petData.owner_id;
		connection.query('UPDATE pets SET reported_as_lost = ?  WHERE major = ? AND minor = ? AND owner_id = ? AND reported_as_lost = ?', [true, major, minor, owner_id, false], function (err, result, fields) {
		  if(err){
		  	console.log("ERROR ** ** *");
		  	console.log(err);
		  	callback(err, null)
		  }
		  else
			callback(null, result);
		});	
	}
};


module.exports = petModel;