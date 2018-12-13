var mongoose = require('mongoose');
 
 var adminschema = new mongoose.Schema({

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
 		type: Number
 	},
 	emailid:{
 		type: String,
 		unique: true
    },
    dob:{
    	type: Number
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
    	type: String,
    },
    address:{
    	type: String
    },
    phoneno:{
    	type: Number
    },
    education:{
    	type: String
    },
    class:{
    	type: String
    },
    previousschool:{
    	type: String
    },
    passoutyear:{
    	type: String
    },
    age:{
    	type: Number
    },
    city:{
    	type: String
    },
    state:{
    	type: String
    },
    country:{
    	type: String
    }
 });

 var admin = mongoose.model('studentreg', adminschema);
 module.exports = admin;