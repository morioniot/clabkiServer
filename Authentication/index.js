const signup = require('./Signup/registration.js')

var registerUser = function(userType){
     return signup.registerUser();
 };


module.exports = {
	registerUser : registerUser
}