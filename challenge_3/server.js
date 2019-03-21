var express = require('express');
var app = express();

var port = 8000;

app.post('/signup', (req, res) => {
  res.send();
});

app.use(express.static('public'));

app.listen(port, console.log(`Server running at ${port}`));


