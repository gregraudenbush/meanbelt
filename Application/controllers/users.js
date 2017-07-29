var mongoose = require('mongoose');
// Importing User model, using mongoose getter method -- look at model page for more info
var User = mongoose.model('User');
var Poll = mongoose.model('Poll')

module.exports ={
	index: function(req, res){
		console.log('find function users controller /server/controllers/users.js');
		Poll.find({}, function(err, poll){
			if(err){
				console.log(err);
				res.json({error: true, errors: err})
			} else {
				res.json(poll);
			}
		})		
	},
	OnePoll: function(req, res){
		console.log('find function controll' + req.body.id);
		Poll.findOne({_id: req.params.id}, function(err, poll){
			if(err){
				console.log("error at controller " + err);
				res.status(404).json({error: true, errors: err})
			} else {
				console.log("back from find")
				res.json({poll: poll});
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
	newPoll: function(req, res){
		console.log('controller newQ activate');
			var poll =new Poll({text: req.body.text, option: req.body.option, vote: req.body.vote, user: req.body.user})
				
				console.log(req.body.text + " passed in controller register")
				poll.save(function(err){
					console.log(req.body.text + " passed in controller register")				
					if(err){
						console.log("didnt make it back " + err)
						res.json({error: true, errors: err});
					} else {
						console.log("made it back from db")
						res.json(poll);
					}
				})
	},
			delete: function(req, res, next){
    	console.log("question remove started")
    	console.log(req.body.id)
			Poll.remove({_id: req.body.id})
			.exec(function(err, data) {
				if(err){
					console.log("Remove question error: " + err);
					} else {
						console.log(data);
					res.json({ status: true})
					}
			});
			},
	
		vote1: function(req, res){
     console.log(req.body.id)
     Poll.findOne({_id: req.body.id})
     .exec(function(err, data) {
       if(err){
         console.log(" Vote  error: " + err);
         } else {
           data.vote.opt1 += 1
           data.save(function(err){
             if(err){
               res.json({status:false})
             } else{
               res.json({status:"succsess"})
             }
           })
         
         }
      });
	},
	vote2: function(req, res){
     console.log(req.body.id)
     Poll.findOne({_id: req.body.id})
     .exec(function(err, data) {
       if(err){
         console.log(" Vote  error: " + err);
         } else {
           data.vote.opt2 += 1
           data.save(function(err){
             if(err){
               res.json({status:false})
             } else{
               res.json({status:"succsess"})
             }
           })
         
         }
      });
	},
		vote3: function(req, res){
     console.log(req.body.id)
     Poll.findOne({_id: req.body.id})
     .exec(function(err, data) {
       if(err){
         console.log(" Vote  error: " + err);
         } else {
           data.vote.opt3 += 1
           data.save(function(err){
             if(err){
               res.json({status:false})
             } else{
               res.json({status:"succsess"})
             }
           })
         
         }
      });
	},
vote4: function(req, res){
     console.log(req.body.id)
     Poll.findOne({_id: req.body.id})
     .exec(function(err, data) {
       if(err){
         console.log(" Vote  error: " + err);
         } else {
           data.vote.opt4 += 1
           data.save(function(err){
             if(err){
               res.json({status:false})
             } else{
               res.json({status:"succsess"})
             }
           })
         
         }
      });
	},			
	
	// this.show = function(req, res){
	// 	// retrieve single user
	// 	// this is how we retrieve the users id
	// 	console.log(req.body.id)
	// }
}