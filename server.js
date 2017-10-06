var express = require ('express');
var app = express();
var to_do_controller = require ('./controllers/to_do_controller');

app.set('view engine' , 'ejs');

app.use(express.static('./public')) ;



// fire the controller 

to_do_controller(app);


app.listen(3000);









