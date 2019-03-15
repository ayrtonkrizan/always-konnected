var express = require('express')
    ,app = express()
    ,routes = require('../app/routes')
    ,bodyParser = require('body-parser')
    ,cors = require('cors');

app.use(cors({ origin: true }));
app.use(bodyParser.json());

routes(app);

app.use((req, res, next) => {
    res.status(404);
    console.error('Erro', '404');
    // respond with html page
    if (req.accepts('html')) {
      //res.render('404', { url: req.url });
      res.redirect('/index.html')
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });
module.exports = app;