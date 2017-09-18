const admin              = require("firebase-admin");
const serviceAccountPath = process.env.FIREBASE_KEYS || './serviceAccountKey.json'
const serviceAccount     = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://clabki-b4c9e.firebaseio.com"
});

module.exports = admin;