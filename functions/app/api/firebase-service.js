const firebase = require("firebase-admin");
const serviceAccount = require("../../private/firebase-key.json");
const mailer = require('./mailer');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://always-konnected.firebaseio.com"
});

const dbref = {
    users: firebase.database().ref('users'),
    companies: firebase.database().ref('companies')
}

var api = {}


api.signUp = (extras={}) => {

    extras.companyTaxId = extras.companyTaxId.cleanTaxId();
    console.log(extras.accessLevel);
    if(extras.accessLevel != 100){
        return createUser(extras);
    }
    else{
        company = {
            taxId: extras.companyTaxId,
            name: extras.name? extras.name: '',
            email: extras.email,
            phone: extras.phone,
            //email:'ayrton.krizan@ramo.com.br',
            status: 'P',
            serverAddress: '',
            serverType: '',
            databaseName: '',
            erpUser: '',
            erpPass: ''
        };
        return createCompany(company);
    }
}

api.signIn = (token) => {
    return new Promise((resolve, reject) => {
        firebase.auth().verifyIdToken(token)
            .then(decodedToken =>{
                console.log(decodedToken);
                resolve({status:200, code:200, msg:'verificado!'})
            })
            .catch(err => {
                console.error('Token Nao verificado', err);
                reject({status:404, code:404, msg:'Nao verificado!'})
            })
    });
}


createCompany = (company) =>{
    console.log(company)
    return new Promise((resolve, reject)=> {
        dbref.companies.child(company.taxId).set(company)
            .then(ref => {
                mailer.sendEmail('ayrton.krizan@ramo.com.br', "Nova empresa cadastrada, acesso o portal para maiores informações!");
                resolve({error:false, message:"Empresa cadastrada em breve entraremos em contato nos dados fornecidos!"})
            })
            .catch(err => {
                reject({error:true, message:"Falha ao cadastrar empresa"})
            });
    });
}

createUser = (user) =>{
    return new Promise((resolve, reject)=> {
        dbref.companies.child(user.companyTaxId).once('value')
            .then(snapshot => {
                if(snapshot.val()){
                    firebase.auth().createUser(user)
                        .then(body => {
                            console.log('Registrou');
                            console.log(body);
                            return body;
                        })
                        .then(body => {
                            dbref.users.child(body.uid).set(user)
                                .then(ref  => {//use 'child' and 'set' combination to save data in your own generated key
                                    console.log("Saved");
                                    resolve({error: false, message:"Usuário cadastrado com sucesso!"});
                                }) 
                                .catch(console.log);
                        })
                        .catch(err => {
                            console.log(err);
                            reject({error: true, message: err.errorInfo.message, status: 404});
                        });
                }
                else{
                    reject({error: true, message: 'Empresa Não cadastrada', status: 404})
                }
            });
    });
}


// api.test = () =>{
//     dbref.companies
// }
module.exports = api;