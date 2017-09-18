
// -------------- Npm and node dependencies ---------------------------//
const admin = require('./init.js');
// -------------------------------------------------------------------//

// var payload = {
//   notification: {
//     title: "Notification sent from Clabki Server",
//     body: " :) "
//   }
// };

var payload = {
  data: {
    score: "850",
    time: "2:45"
  }
};

const  sendMessageToUser = function() {
	
	return function (req,res,next){
		const registrationToken = req.body.firebase_token || req.query.firebase_token;
		console.log("Sending message to: " + registrationToken);
		if(registrationToken != undefined){
			admin.messaging().sendToDevice(registrationToken, payload)
		  	.then(function(response) {
		    	console.log("Successfully sent message:", response);
		    	res.status(200).send({error: null});
		  	})
		  	.catch(function(err) {
		    	console.log("Error sending message:", err);
		    	res.status(500).send({error: err});
		  	});
		}
        else{
            res.status(422).send({error: "Please check the provided data"});
        }
	}  
}

module.exports = sendMessageToUser;