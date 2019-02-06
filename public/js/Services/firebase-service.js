var user, y;


const signUpFirebase = () => {
    let email, password, password2, name, lastName;

    name = $('#sign-up-firstName').val();
    lastName = $('#sign-up-lastName').val();
    email = $('#sign-up-email').val();
    password = $('#sign-up-password').val();
    password2 = $('#sign-up-password2').val();

    if(!(password === password2)){
        alert('Senhas não conferem');
        return;
    }

    console.log(email);
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res =>{
            let user = res.user;

            let ref = firebase.database().ref().child("user");
            let data = {
                email: email,
                password: password,
                firstName: name,
                lastName: lastName,
                id:user.uid
            }
            ref
                .child(user.uid)
                .set(data)
                .then(ref  => {//use 'child' and 'set' combination to save data in your own generated key
                    console.log("Saved");
                }) 
                .catch(console.log);
        })
        .catch(console.log); 
}
const signInFirebase = () => {
    let email, password;

    email = $('#sign-in-email').val();
    password = $('#sign-in-password').val();

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(console.log)
        .catch(err => {
            alert(`Falha ao logar - ${err.code} - ${err.message}`);
            console.log(err);
        }); 
}

const getActiveTab = () => $('div.active')[0].id;