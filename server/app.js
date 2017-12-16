const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('port', (process.env.PORT || 4000));
app.use(express.static('public'));
app.use(bodyParser.json());


  app.listen(app.get('port'), () => {
    console.log('App started on port', app.get('port'));
  });