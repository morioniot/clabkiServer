
// -------------- Npm and node dependencies ---------------------------//
const admin = require('./init.js');
const user  = require('../../Models/Users/user.js');
// -------------------------------------------------------------------//

const  sendMessageToUser = function(user_token, payload) {
	admin.messaging().sendToDevice(user_token, payload)
  	.then(function(response) {
    	console.log("Successfully sent message:", response);
  	})
  	.catch(function(err) {
    	console.log("Error sending message:", err);
  	});  
};


const sendMessageToCommunity = function(payload){

	console.log("***** Sending a message to community *****");
	user.getUsersFirebaseTokens(function(err,users_tokens){
		if(err){
			console.log("Error");
			console.log(err);
		}
		else{
			admin.messaging().sendToDevice(users_tokens, payload)
		  	.then(function(response) {
		    	console.log("Successfully sent message:", response);
		  	})
		  	.catch(function(err) {
		    	console.log("Error sending message:", err);
		  	});  
		}			
	}); 
};

module.exports = {
	sendMessageToUser: sendMessageToUser, 
	sendMessageToCommunity: sendMessageToCommunity
};