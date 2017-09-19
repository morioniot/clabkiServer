const authentication = require('./Authentication');
const report_generator = require('./Report_generator');

const setRoutes = function (app) {
	app.use('/authentication/signup', authentication.getSignupRoutes());
	app.use('/report', report_generator.getReportRoutes());
};

module.exports = setRoutes;