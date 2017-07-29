var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    name: {type: String, required: true },
}, {timestamps: true });

var PollSchema = new mongoose.Schema({
    
    text: {type: String, required: true, minlength: 10},
    option:{opt1: {type: String, required: false},
            opt2: {type: String, required: false},
            opt3: {type: String, required: false},
            opt4: {type: String, required: false},
    },
    vote:{opt1: {type: Number, required: false},
            opt2: {type: Number, required: false},
            opt3: {type: Number, required: false},
            opt4: {type: Number, required: false},
    },
    user: {type: String, required: false},
}, {timestamps: true });

// var AnswerSchema = new mongoose.Schema({
//     _question: {type: Schema.Types.ObjectId, ref: 'Question'},
//     text: {type: String, required: true, minlength: 2 }, 
//     user: {type: String, required: false, minlength: 2} 
//     }, {timestamps: true });
// Remember we can treat mongoose.model() as a getter function or a setter function
// mongoose.model('User') will be used to retrieve user scema
// mongoose.model('User', UserSchema) will be used to set the userSchema to the User key
// we will retrieve this schema in our userController later
mongoose.model('User', UserSchema);
mongoose.model('Poll', PollSchema);
var User = mongoose.model('User')
var Poll = mongoose.model('Poll');

// Custom Validations for user schema
// UserSchema.path('first_name').required(true, 'First Name cannot be blank');
// UserSchema.path('last_name').required(true, 'Last Name cannot be blank');
// UserSchema.path('email').required(true, 'Email cannot be blank');