const firebaseService = require('./firebase-service');
const mailer = require('./mailer');
const api ={};

api.login = (req, res) => {
    console.log('teste');
    firebaseService.signIn(req.body.token)
        .then(t => res.status(301).redirect("/blank.html"))
        .catch(err=>{
            res.status(e.status? e.status:500).json(e);
        })
}

api.logout = (req, res) => {
    let json =  {nome:'Ayrton Krizan', Empresa: 'AlwaysKonnected', connected: false};
    res.json(json);
}

api.signup = (req, res) => {
    firebaseService.signUp(req.body)
        .then(t => {
            res.json(t)
        })
        .catch(e => {
            console.error('cadastro', e);
            res.status(e.status? e.status:500).json(e);
        });
}

api.test = (req, res) => {
    //mailer.sendEmail('ayrton.krizan@ramo.com.br', 'aeaeae');
    //mailer.sendEmail('fefonseca78@gmail.com', 'Fernando boa noite, esse email está saindo automatico do servidor, pois estou fazendo o teste de cadastro de empresas, se receber me avisa no wpp amanhã.');
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    console.log(req.path);

    res.json({status: 'ok'})
}


module.exports = api;