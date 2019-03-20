var express = require('express');
var app = express();
var bodyParser = require('bodyParser');
var port = 8000;

app.use(express.static('client'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('req', req.body);
  res.send('hi!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));