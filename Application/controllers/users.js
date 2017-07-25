var mongoose = require('mongoose');
// Importing User model, using mongoose getter method -- look at model page for more info
var User = mongoose.model('User');
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')
module.exports ={
	index: function(req, res){
		console.log('find function users controller /server/controllers/users.js');
		Question.find({}, function(err, quest){
			if(err){
				console.log(err);
				res.json({error: true, errors: err})
			} else {
				res.json(quest);
			}
		})		
	},
	OneQ: function(req, res){
		console.log('find function users controller /server/controllers/users.js');
		User.findOne({id: req.body}, function(err, quest){
			if(err){
				console.log(err);
				res.json({error: true, errors: err})
			} else {
				res.json(quest);
			}
		})		
	},
	login: function(req, res){
		console.log('controller register');
			var user =new User({name: req.body.name})
				
				console.log(req.body.name + " passed in controller register")
				user.save(function(err){
					console.log(req.body.name + " passed in controller register")				
					if(err){
						
						res.json({error: true, errors: err});
					} else {
						console.log(user.name +"made it back from db")
						res.json(user);
					}
				})
	},
	newQ: function(req, res){
		console.log('controller newQ activate');
			var question =new Question({text: req.body.text, desc: req.body.desc})
				
				console.log(req.body.text + " passed in controller register")
				question.save(function(err){
					console.log(req.body.text + " passed in controller register")				
					if(err){
						
						res.json({error: true, errors: err});
					} else {
						console.log("made it back from db")
						res.json(user);
					}
				})
	},
	
	// this.show = function(req, res){
	// 	// retrieve single user
	// 	// this is how we retrieve the users id
	// 	console.log(req.body.id)
	// }
}