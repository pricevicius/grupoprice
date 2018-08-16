var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
  
app.listen(process.env.PORT || 8000);

console.log("server ok na porta 8000");