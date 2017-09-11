
// -------------- Npm and node dependencies ---------------------------//
const user  = require('../../Models/Users/user.js')
// -------------------------------------------------------------------//

const getStatus = function() {
	
	return function (req,res,next){
         const userFacebookId = req.body.facebook_id;
         if(userFacebookId){
            user.getStatus(userFacebookId, function(err,result){
            	if(!err){
                  res.status(200).send({registered: result});
            	}
            	else
            		res.status(500).send({error: err});

            });  
         }
         else{
            res.status(422).send({error: "Please check the provided data"});
         }
	}  
}

module.exports = {getStatus: getStatus};