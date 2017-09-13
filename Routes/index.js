const authentication = require('./Authentication');
const firebase = require('./Cloud_messaging')

const setRoutes = function (app) {
	app.use('/authentication/signup', authentication.getSignupRoutes());
	app.use('/cloud_messaging/',      firebase.getFireBaseRoutes());
}

module.exports = setRoutes;