/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {

    app.route('/signup')
        .post(api.signup);
        
    app.route('/login')
        .post(api.login);
    
    app.route('/logout')
        .post(api.logout);
    
    app.route('/test')
        .post(api.test)
        .get(api.test);
};