const express = require('express');
const router = express.Router();
const report = require('../../Report_generator');

const ReportRoutes = function(){
	
	router.get('/lost', report.lost());
	router.get('/found', report.found());
	return router;
};

module.exports = ReportRoutes;