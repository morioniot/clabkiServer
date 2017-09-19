const express = require('express');
const router = express.Router();
const report = require('../../Report_generator');

const ReportRoutes = function(){
	
	router.get('/lost', report.lost());
	return router;
};

module.exports = ReportRoutes;