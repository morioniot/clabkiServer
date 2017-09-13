const express = require('express');
const router = express.Router();
const firebaseAdmin = require('../../Cloud_messaging');

const fireBaseRoutes = function(){
	
	router.get('/firebase/toUser', firebaseAdmin.sendMessageToUser());
	return router;
};

module.exports = fireBaseRoutes;