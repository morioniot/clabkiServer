const authentication = require('./Authentication');
const firebase = require('./Cloud_messaging')
const report_generator = require('./Report_generator');

const setRoutes = function (app) {
	app.use('/authentication/signup', authentication.getSignupRoutes());
	app.use('/cloud_messaging/',      firebase.getFireBaseRoutes());
	app.use('/report', report_generator.getReportRoutes());
};

module.exports = setRoutes;