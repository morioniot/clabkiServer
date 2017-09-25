
// -------------- Npm and node dependencies ---------------------------//
const admin = require('./init.js');
const user  = require('../../Models/Users/user.js');
// -------------------------------------------------------------------//

const  sendMessageToUser = function(user_token, payload, callback) {
	sendFirebaseMessageBlocks(user_token,payload,1);
};


const sendMessageToCommunity = function(payload, callback){

	console.log("***** Sending a message to community *****");
	user.getUsersFirebaseTokens(function(err,users_tokens){
		if(err){
			console.log("Error");
			console.log(err);
			callback(err, null);
		}
		else{
  			const users_number = users_tokens.length;
  			sendFirebaseMessageBlocks(users_tokens,payload,1);
		};			
	}); 
};


const sendFirebaseMessageBlocks = function(register_token, payload, block_number){

	const max_devices_allowed = 1;
	const total_blocks_number = Math.ceil((register_token.length)/max_devices_allowed);


	admin.messaging().sendToDevice(users_tokens, payload)
  	.then(function(response) {
    	console.log("Successfully sent message throught Firebase:", response);
    	if(block_number < total_blocks_number){
    		block_number += 1;
    		sendFirebaseMessageBlocks(register_token,payload,block_number)
    	}
    	else{
    		console.log("All firebase messages block has been sent");
    		return 
    	}
  	})
  	.catch(function(err) {
    	console.log("Error sending message throught Firebase:", err);
    	return err
  	});
};

module.exports = {
	sendMessageToUser: sendMessageToUser, 
	sendMessageToCommunity: sendMessageToCommunity
};