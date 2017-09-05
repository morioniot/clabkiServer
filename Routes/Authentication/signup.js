const express = require('express');
const router = express.Router();
const authentication = require('../../Authentication');


const SignupRoutes = function(){

	router.get('/', authentication.registerUser());
	return router;
};

module.exports = SignupRoutes;