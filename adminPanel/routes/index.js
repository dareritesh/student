var express = require('express');
var router = express.Router();

var request = require('request');

var Admin = require('../model/admin');
var transporter = require('../config/nodemailer_config');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/helllofunction',function(req,res,next){

	console.log("jjjjjjjjjj");

	res.json({"hello friends":"welcome in first apiii"});
});



////////////////get details by user////////////////////

router.post('/getdetailadminbyusername', function(req,res,next){

	console.log("aaaaaaaaaaaa");

	if (req.body.Username) {
		Admin.findOne({username:req.body.Username},function(err, admindata){

			if(err || !admindata){
				res.json({"status":"Error","msg":"Error in fetching request"});
			} else {

					var data ={
						"username": admindata.username,
						"fathername":admindata.emailid
					};
				res.json({"status":"ok","msg":"Request details fetched successfully","data":data});
			}
		});
	}
		else {
			res.json({"status":"error","msg":"Please enter all valid details"});
		}
	
});


router.get('/sampleRequest', function(req, res, next){

request('https://api.crex24.com/v2/public/tickers?instrument=BIXCPRO-USD', function (error, response, body) {
// change the data inti Json Format
var Bdata = JSON.parse(body);


if(error){
	res.json({"status":"ERROR","msg":"error Massage","err":error});
}else{

	console.log("live value==> "+Bdata[0].last);

	res.json({"status":"OK","msg":"Request fetched successfully","data":Bdata});
}


  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

});

});



request.get('/sendMail',function(req, res, next){



 var mailoptions = {
                                    
                            from: 'janardan@cyperts.net',
                            to: 'govind@cyperts.net',
                            subject: 'this is test massage',
                            text: 'Hello THIS is for  Testing ONLY',
                            html: 'Hello THIS is for  Testing ONLY'
                    };
                        transporter.sendMail(mailoptions, function (error, info) {
                            if (error) {
                              console.log(error);
                              res.json({"status": "Error", "msg":"Error in sending mail."});
                            } else {
                                     console.log('Email sent: ' + info.response);
                                     res.json({"status": "OK", "msg":"Mail sent."});
                                    }
                    });

});





//////////////////get personal info of user//////////////////


module.exports = router;
