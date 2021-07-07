var express = require('express');
var app = express(); 
// serves files from the root directory
app.use(express.static('./govuk-prototype-kit-9.14.0/'));
app.listen(8080, function () {    
  console.log('Listening to traffic at http://localhost:8080');  
});