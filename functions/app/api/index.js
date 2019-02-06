const firebaseService = require('./firebase-service');
const api ={};

api.login = (req, res) => {
    firebaseService.signIn('ayrtonkrizan@gmail.com', '123456');
    let json =  {nome:'Ayrton Krizan', Empresa: 'AlwaysKonnected', connected: true};
    res.json(json);
}

api.logout = (req, res) => {
    let json =  {nome:'Ayrton Krizan', Empresa: 'AlwaysKonnected', connected: false};
    res.json(json);
}

api.signup = (req, res) => {
    firebaseService.signUp('ayrtonkrizan@gmail.com', '123456');
    let json =  {nome:'Ayrton Krizan', Empresa: 'AlwaysKonnected', connected: true};
    res.json(json);
}

api.test = (req, res) => {
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    console.log(req.path);

    res.json({status: 'ok'})
}


module.exports = api;