/*
 * Module dependencies
*/

var express = require('express');
var app = express();

//Setup the jade views.
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));

//Allow for local files to be used.
app.use(express.static(__dirname + '/public'));

//The home page (or index) of the website.
app.get('/', function (req, res) {
  res.render('index',{ 
      title : 'Home' 
  });
});

//The about me page of the website. 
app.get('/about', function(req, res){
    res.render('about', {
        title : 'About Me'
    });
});

/*  
    Listens for the port 8080.
    As per the request in the information of this Lab.
*/
app.listen(8080);