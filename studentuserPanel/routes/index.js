	var express = require('express');
var router = express.Router();

var Studentreg = require('../model/registration');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/helloofunction', function(req,res,next){
	console.log("hhhhheeeeellloooo");

	res.json({"msg": "Welcome in first Api"});
});


/////////////save api for registraion schema ////////////

router.post('/savestudentdetail',function(req,res,next){
	console.log("hhhhhh");

	var studentreginsert = new Studentreg();

	studentreginsert.username = req.body.Username;
	studentreginsert.password = req.body.Password;
	studentreginsert.emailid = req.body.Emailid;

	console.log("studentreginsert===="+studentreginsert);

	studentreginsert.save(function(err){
		if (err) {
			res.json({"status":"Error","msg":"user not saved","err":err});

		} else {
			res.json({"status":"ok","msg":"Details saved successfully","data":studentreginsert});
		}
	});
});

//////findOneAndUpdate Api for studentreg ///////////////

router.post('/personalinfo',function(req,res,next){

	console.log("dddddddd"+req.body.username);
	studentreg.findOne({username:req.body.Username},function(err,studentregdetails){

		if(err || !studentregdetails)
	    {
			res.json({"status":"Error","msg":"User not found"});
		}
		 else {
            
            Studentreg.findOneAndUpdate({username:req.body.Username},{
            	$set:{
            		fathername:req.body.Fathername,
            		mothername:req.body.Mothername,
            		bloodgroup:req.body.Bloodgroup,
            		age:req.body.Age,
            		gender:req.body.Gender,
            		dob:req.body.Dob
            	}
            },{new:true},
            function(err,updatestudentreg){
            	if (err || !updatestudentreg) {
            		res,json({"status":"Error","MSG":"Student not updated","Err":err});
            	} else {
            		res.json({"status":"ok","msg":"update successfully","Data":studentregdetails});
            	}
				}
			);
		}
	});
});

////////////////findoneandupdate api for contact//////////

router.post('/studentcontact',function(req,res,next){
	console.log("ssssssss":req.body.Username);

	Studentreg.findOne({username:req.body.Username},function(err,studentregdetails){
		if(err || !studentregdetails){
			res.json({"status":"Error","msg":"uer not found"});
		} else {
			Studentreg.findOneAndUpdate({username:req.body.Username},{
				$set:{
					mobno:req.body.Mobno,
					city:req.body.City,
					state:req.body.State,
					address:req.body.Address,
					country:req.body.Country
				},{new:true},
				function(err,updatestudentreg){
					if(err || !updatestudentreg){
						res.json({"status":"Error","msg":"user not updated"});
					} else {
						res.json({"status":"ok","msg":"update successsfully"});
					}
				}
			});
		}
	});
});

/////////////////////finoneandupdate api for otherinfo////////////////////


router.post('/studentOtherInfo',function(req,res,next){
	console.log("ssssssss":req.body.Username);

	Studentreg.findOne({username:req.body.Username},function(err,studentregdetails){
		if(err || !studentregdetails){
			res.json({"status":"Error","msg":"uer not found"});
		} else {
			Studentreg.findOneAndUpdate({username:req.body.Username},{
				$set:{
					previousschool:req.body.PreviousSchool,
					passoutclass:req.body.PassoutClass,
					board:req.body.Board,
					passoutyear:req.body.PassoutYear,
					yeargap:req.body.YearGap
				},{new:true},
				function(err,updatestudentreg){
					if(err || !updatestudentreg){
						res.json({"status":"Error","msg":"user not updated"});
					} else {
						res.json({"status":"ok","msg":"update successsfully"});
					}
				}
			});
		}
	});
});



          module.exports = router;
