var path = require('path')
var mongoose = require('mongoose');

var user = require('../controllers/users.js');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll')

module.exports = function(app){
    
    app.post('/login', (req, res, next)=>{  
    console.log(req.body.name + " made it to routs.js login" )
    user.login(req, res)
  });
    app.post('/newPoll', (req, res, next)=>{  
    console.log(req.body.text + " made it to routs.js login" )
    user.newPoll(req, res)
  });
    app.get("/index", user.index)

    app.get("/OnePoll/:id", user.OnePoll)

    app.post('/delete', (req, res, next)=>{
    user.delete(req,res, next)
  });

    app.post('/vote1', (req, res, next)=>{
		console.log("made it to routes" + req.body.id)
    user.vote1(req, res, next);
    });
    app.post('/vote2', (req, res, next)=>{
		console.log("made it to routes" + req.body.id)
    user.vote2(req, res, next);
    });
    app.post('/vote3', (req, res, next)=>{
		console.log("made it to routes" + req.body.id)
    user.vote3(req, res, next);
    });
  app.post('/vote4', (req, res, next)=>{
		console.log("made it to routes" + req.body.id)
    user.vote4(req, res, next);
    });


    
    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    })
    
}

