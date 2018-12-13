var mongoose =require('mongoose');

var studentregschema = new mongoose.Schema({

	firstname:{
		type: String,
		trim: true
	},
	middlename:{
		type: String,
		trim: true
	},
	lastname:{
		type: String,
		trim: true
	},
	username:{
		type: String,
		unique: true
	},
	password:{
		type: String
	},
	dob:{
		type: String,
		trim: true
	},
	fathername:{
		type: String,
		trim: true
	},
	mothername:{
		type: String,
		trim: true
	},
	gender:{
		type: String
	},
	age:{
		type: Number
	},
	address:{
		type: String
	},
	city:{
		type: String
	},
	state:{
		type: String
	},
	phoneno:{
		type: Number
	},
	emailid:{
		type: String,
		unique: true
	},
	bloodgroup:{
		type: String
	},
	education:{
		type: String
	},
	previousschool:{
		type: String
	},
	passoutclass:{
		type: String
	},
	passoutyear:{
		type:String
	},
	board:{
		type: String
	},
	yeargap:{
		type: String
	},
	country:{
		type: String
	}


});

var studentreg = mongoose.model('studentreg',studentregschema);
module.exports = studentreg;