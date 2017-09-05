
// -------------- Local dependencies ---------------------------//
const connection  = require('../../Models/db.js')
// -------------------------------------------------------------------//

const userModel = {};


userModel.getUserInfo = function (userData, res) {
	if(connection){
		const major = userData.major;
		const minor = userData.minor;
		console.log("Getting  Pet Status : Major: " + major + " Minor: " + minor);
		const query = {major: major, minor: minor};
		connection.query('SELECT * FROM status WHERE  major ='+ query.major +' AND minor = ' + query.minor + '',function(err,rows){
			if(err)
				res.status(500).send({error: err});
			console.log(" ****** Consulté base de datos *****")
			console.log(rows)
			// if(rows.length > 0){
			// 	console.log()
			// }
			// else{
			// 	res.json({error:"Major and minor combination does not exist"})
			// }
		});
	}

}


module.exports = userModel;