
// -------------- Local dependencies ---------------------------//
const connection  = require('../../Models/init.js')
// -------------------------------------------------------------------//

const userModel = {};


userModel.saveUser = function (userData, callback) {
	if(connection){
		connection.query('INSERT INTO users SET ?', userData, function(err,result){
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


userModel.getStatus = function(facebook_id, callback){

	if(connection){
		connection.query('SELECT * FROM users WHERE facebook_id ='+ facebook_id + '',function(err,user){
		  if(err){
		  	console.log("ERROR ** ** *");
		  	console.log(err);
		  	callback(err, null);
		  }
		  else{
		  	var result = false;
		  	if(user.length != 0)
		  		result = true;
			callback(null, result);
		  }
		});	
	}	
}


userModel.getUsersFirebaseTokens = function(callback){
	if(connection){
		connection.query('SELECT firebase_token FROM users', function(err,results){
			if(err){
			  	console.log("ERROR ** ** *");
			  	console.log(err);
			  	callback(err, null);			
			}
			else{
				var firebase_tokens = [];
				for(i in results){
					firebase_tokens[i] = results[i].firebase_token;
				};
				callback(null,firebase_tokens);
			}
		});
	}
}

module.exports = userModel;