var express = require("express");

var app = express();

app.get('/:inputDate', function (req, res) {
  var unix;
  var natural;
  
  // Check if input is natual or unix
  unix = parseInt(req.params.inputDate);
  
  if (isNaN(unix)) {
    
    // If natural language date ...
    unix = Date.parse(req.params.inputDate) / 1000;
    natural = req.params.inputDate;
    
  } else {
     
    // If unix date ...
    natural = new Date(unix * 1000);
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var mm = natural.getMonth();
    var dd = natural.getDate();
    var yy = natural.getFullYear();
    natural = monthNames[mm] + ' ' + dd + ', ' + yy;
    
  }

  res.send({unix, natural});
})

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})