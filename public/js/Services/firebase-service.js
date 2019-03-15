const host = 'http://localhost:5000/';

const endPoints = {
    signIn: `${host}login`,
    signUp: `${host}signup`,
}

var config = {
    apiKey: "AIzaSyDppDNnKEqYig7HNfhNI4Smu7ORLeEGAls",
    authDomain: "always-konnected.firebaseapp.com",
    databaseURL: "https://always-konnected.firebaseio.com",
    projectId: "always-konnected",
    storageBucket: "always-konnected.appspot.com",
    messagingSenderId: "631248488335"
};
  firebase.initializeApp(config);

var isLogin = false;

$('#btnLogin').click((e) => {
    e.preventDefault();
    console.log('Logando');
    signInFirebase();
})

$('#btnSignUp').click(e=>{
    e.preventDefault();
    if($('form').attr('ak-type') == "user")
        signUpUser();
    else if($('form').attr('ak-type') == "company")
        signUpCompany();
});


const signUpCompany = () => {
    var company = {}
    company.companyTaxId = $('#cnpj').val();
    company.name = $('#name').val();
    company.phone = $('#phone').val();
    company.email = $('#email').val();
    company.accessLevel = 100

    let options = {
        headers: {'Content-type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(company)
    }

    fetch(endPoints.signUp, options)
        .then(res => {
            console.log(res);
            window.location.replace('/login.html');
        })
        .catch(err=>{
            console.error('Falha ao cadastrar empresa AK', `${err.code} - ${err.message}`);
        })

}

const signUpUser = () => {
    if($('#password').val() !== $('#confirmPassword').val()){
        console.log('Senhas precisam ser iguais');
        return;
    }

    var user = {}
    user.companyTaxId = $('#cnpj').val();
    user.firstName = $('#firstName').val();
    user.lastName = $('#lastName').val();
    user.email = $('#email').val();
    user.password = $('#password').val();
    user.accessLevel = 0;

    let options = {
        headers: {'Content-type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(user)
    }

    console.log(options);
    fetch(endPoints.signUp, options)
        .then(res => {
            console.log(res);

            if(res.status == 200)
                window.location.replace('/login.html');
            else{
                res.json().then(console.log)
            }
        })
        .catch(err=>{
            console.error('Falha ao cadastrar empresa AK', `${err.code} - ${err.message}`);
        })
    
}
const signInFirebase = () => {
    let email, password;

    email = $('#inputEmail').val();
    password = $('#inputPassword').val();

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=> isLogin=true)
        .catch(err => {
            console.error('Falha ao logar', `${err.code} - ${err.message}`);
        }); 
}

firebase.auth().onAuthStateChanged(async user=>{
    localStorage.setItem('fbToken', user);
    if(!user || !isLogin)
        return;
    isLogin = false;
    user.getIdToken()
        .then(token =>{
            let options = {
                headers: {'Content-type': 'application/json'},
                method: 'POST',
                body: JSON.stringify({token})
            }
            
            fetch(endPoints.signIn, options)
                .then(res => {
                    console.log(res);
                    //window.location.replace('/main.html');
                })
                .catch(err=>{
                    console.error('Falha ao logar AK', `${err.code} - ${err.message}`);
                    firebase.auth().signOut();
                })
        })
});

const getActiveTab = () => $('div.active')[0].id;