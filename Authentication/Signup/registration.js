
// -------------- Npm and node dependencies ---------------------------//
const user  = require('../../Models/Users/user.js')
// -------------------------------------------------------------------//

const registerUser = function() {
	
	return function (req,res,next){
         const userData = {email: req.body.email, name: req.body.name};
         if(userData.email && userData.name){
            user.saveUser(userData, function(err,result){
            	if(!err)
            		//res.json(userData);
                  res.status(200).send({error: null});
            	else
            		res.status(500).send({error: err});

            });  
         }
         else{
            res.status(500).send({error: "Please check the provided data"});
         }


	}
}

module.exports = {registerUser: registerUser};