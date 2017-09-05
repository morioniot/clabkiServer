
// -------------- Local dependencies ---------------------------//
const connection  = require('../../Models/db.js')
// -------------------------------------------------------------------//

const userModel = {};


userModel.saveUser = function (userData, callback) {
	if(connection){
		const newDoc = {email: userData.email, name: userData.name};
		connection.query('INSERT INTO users SET ?', newDoc, function(err,result){
		  if(err){
		  	console.log("ERROR ** ** *");
		  	console.log(err);
		  	callback(err, null)
		  }
		  else{
		  	console.log("User has been saved in DataBase")
			callback(null, result);
		  }
		});	
	}
};


module.exports = userModel;