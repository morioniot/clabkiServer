
// -------------- Npm and node dependencies ---------------------------//
const admin = require('./init.js');
const user  = require('../../Models/Users/user.js');
// -------------------------------------------------------------------//

const  sendMessageToUser = function(user_token, payload, callback) {
	admin.messaging().sendToDevice(user_token, payload)
  	.then(function(response) {
    	console.log("Successfully sent message:", response);
    	callback(null, response);
  	})
  	.catch(function(err) {
    	console.log("Error sending message:", err);
    	callback(err, null);
  	});  
};


const sendMessageToCommunity = function(payload,callback){

	console.log("***** Sending a message to community *****");
	user.getUsersFirebaseTokens(function(err,users_tokens){
		if(err){
			console.log("Error");
			console.log(err);
			callback(err, null);
		}
		else{
			admin.messaging().sendToDevice(users_tokens, payload)
		  	.then(function(response) {
		    	console.log("Successfully sent message:", response);
		    	callback(null, response);

		  	})
		  	.catch(function(err) {
		    	console.log("Error sending message:", err);
		    	callback(err, null);
		  	});  
		}			
	}); 
};

module.exports = {
	sendMessageToUser: sendMessageToUser, 
	sendMessageToCommunity: sendMessageToCommunity
};