
// -------------- Npm and node dependencies ---------------------------//
const user  = require('../../Models/Users/user.js')
// -------------------------------------------------------------------//

const registerUser = function() {
	
	return function (req,res,next){
         const userData = {email: req.query.email, name: req.query.name, gender: req.query.gender, facebook_id: req.query.facebook_id, facebook_token: req.query.facebook_token, firebase_token: req.query.firebase_token};
         if(userData.email && userData.name && userData.gender && userData.facebook_id && userData.facebook_token && userData.firebase_token){
            user.saveUser(userData, function(err,result){
            	if(!err)
                  res.status(200).send({error: null});
            	else
            		res.status(500).send({error: err});

            });  
         }
         else{
            res.status(422).send({error: "Please check the provided data"});
         }
	}
}

module.exports = {registerUser: registerUser};