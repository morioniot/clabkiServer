
// -------------- Npm and node dependencies ---------------------------//
const pet = require('../../Models/Pets/pet.js');
const firebase = require('../../Cloud_messaging');
// -------------------------------------------------------------------//

const found = function() {
	return function (req,res,next){
		const petData = {owner_id: (req.query.owner_id || req.body.owner_id), major: (req.query.major || req.body.major), minor: (req.query.minor || req.body.minor)};
		if(petData.owner_id && petData.major && petData.minor){
			const payload = {
				notification: {
			    	title: "CLABKI PET HAS BEEN REPORTED AS FOUND :)",
			    	body: "Major: " + petData.major + " Minor: " + petData.minor
			 	}							
			};
			firebase.sendMessageToCommunity(payload,function(err,response){
				if(err)
					res.status(500).send({error: err});
				else{
					pet.reportAsFound(petData, function(err,result){
						if(err)
							res.status(500).send({error: err});
						else{
							res.status(200).send({error: null});
						}
					});
				}
			}); 
		}
		else{
			res.status(422).send({error: "Please check the provided data"});
		}
	}  
};


module.exports = found;