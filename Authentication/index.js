const signup = require('./Signup');
 
const registerUser = function(){
     return signup.registration.registerUser();
 };

const getSignupStatus = function(){
     return signup.status.getStatus();
 };

module.exports = {
	registerUser : registerUser,
	getSignupStatus : getSignupStatus
}