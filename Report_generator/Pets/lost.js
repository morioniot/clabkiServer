
// -------------- Npm and node dependencies ---------------------------//
const pet = require('../../Models/Pets/pet.js');
// -------------------------------------------------------------------//


const  lost = function() {
	return function (req,res,next){
		const petData = {owner_id: (req.query.owner_id || req.body.owner_id), major: (req.query.major || req.body.major), minor: (req.query.minor || req.body.minor)};
		if(petData.owner_id && petData.major && petData.minor){
			pet.reportAsLost(petData, function(err,result){
				if(!err){
					if(result.affectedRows != 0)
			      		res.status(200).send({error: null});
			      	else
			      		res.status(200).send({error:"Pet is not registered/Already reported as lost"});
				}
				else
					res.status(500).send({error: err});
			});  
		}
		else{
		res.status(422).send({error: "Please check the provided data"});
		}
	}  
};

module.exports = lost;