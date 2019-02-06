var firebase = require("firebase-admin");

var serviceAccount = require("../../private/firebase-key.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://always-konnected.firebaseio.com"
});

var api = {}

api.signUp = (email, password) => {
    let user = {
        email: email,
        password: password
    }
    //console.log(firebase.auth().createUser())
    firebase.auth()
        .createUser(user)
        .then(body => {
            console.log('Registrou');
            console.log(body);
        })
        .catch(console.log)
}

api.signIn = (email, password) => {
    firebase.auth()
        .createSessionCookie()
}

module.exports = api;