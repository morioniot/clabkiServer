const express = require('express');
const router = express.Router();
const report = require('../../Report_generator');

const ReportRoutes = function(){
	router.post('/lost', report.lost());
	router.post('/found', report.found());
	return router;
};

module.exports = ReportRoutes;