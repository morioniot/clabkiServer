const authentication = require('./Authentication');

const setRoutes = function (app) {
	app.use('/authentication/signup', authentication.getSignupRoutes());
}

module.exports = setRoutes;