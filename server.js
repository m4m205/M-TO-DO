var express = require ('express');
var app = express();



// http = require('http');
// server = http.createServer(app);
// server.listen(3000,"192.168.23.21");
//hi



var to_do_controller = require ('./controllers/to_do_controller');

app.set('view engine' , 'ejs');

app.use(express.static('./public')) ;



// fire the controller 

to_do_controller(app);



app.listen(3000 );









