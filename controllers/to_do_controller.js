var bodyParser = require ("body-parser");
var mongoose = require ("mongoose");

// connect to database 
mongoose.connect('mongodb://mahmoud:test@ds011664.mlab.com:11664/to-do');

// Create schema 
var todoSchema = new mongoose.Schema({
	item: String 
});

var Todo = mongoose.model('Todo' , todoSchema );

// var itemOne= Todo({item: "Go Home"}).save(function(err){
// 	if (err) throw err;
// 	console.log("item is saved");
// });



var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app){

app.get('/todo' , function(req , res){
	// having the data from MongoDB and send it to view 
	Todo.find({} , function(err , data){
		if (err) throw err ;
		res.render('todo' , {todos: data});
	});
	
});  

app.post('/todo' , urlencodedParser , function(req , res){
	// having the data from view and added to MongoDB
	var newTodo = Todo(req.body).save(function( err , data ){
		if (err) throw err ;
		res.json(data);
	});
	
	
});  

app.delete('/todo/:item' , function(req , res){
	// delete the requested data from MongoDB
	Todo.find({item: req.params.item.replace(/\-/g," ") }).remove(function(err,data){
		if (err) throw err ;
		res.json(data); 
	});

	
});


};