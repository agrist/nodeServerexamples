var mongoose = require('mongoose'),
user = mongoose.model('users'); //Mongoose automatically looks for the plural version of your model name.

exports.findAll = function(req, res) {
  user.find({},function(err, results) {
	  let temp = {};
	  temp.data = results[0];
	  console.log(temp);
    return res.send(temp);
  });
};

exports.add = function(req, res) {
  console.log("body --------------------------------------------------");
  console.log(req.body);
  if(req.body.username && req.body.password){
    var userObj = new user;
    userObj.user= req.body.username;
    //long version
    if(req.body.name) { userObj.name = req.body.name;  }
    else {userObj.name = 'defaultName';}
    //short version, but still might cause problems with "falsy" values
    userObj.password = req.body.password || "pass123";//obvious security flaw is obvious
    userObj.profession = req.body.profession || "miner";
    userObj.ledit= new Date().valueOf();

    console.log(userObj);
    //user.insert(userObj);
    //^ would work if no id is needed back. We need it, so we are using save with a callback
    user.create(userObj, function (err, small) {
      if (err){
		return handleError(err);}
	  
      return res.send(userObj);
    });
  }else{
    //console.log("Wrong user info found in request:     ");
    //console.log(req);
    return res.send("Wrong user info found in request!");
  }
};


exports.update = function(req, res) {
  console.log("update");
  console.log(req.body);
  var findingQuery = {'id':req.params.id};
  var newvalues = {$set: {name: "NewDwarf", profession: "Baker", user:"dwarf12", ledit: new Date().valueOf()}};// will set specific fields to given values
  user.updateOne(findingQuery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
  });
};


exports.delete = function(req, res) {
  if(req.params.id){
    var query = {'id': req.body.id};
    user.remove(query ,function(err, results) {
      //console.log(results);
      return res.send(results);
    });
  }else{
      return res.send("Wrong user info found in request!");
  }
};


exports.findById = function(req, res) {
  console.log(" Find by Id");
  console.log(req.body);
  console.log('***********************');
  console.log(req.params.id);
  var id = req.params.id || '1';
  user.findOne({'id': id},function(err, results){
    console.log(results);
	let temp = {};
	temp.user = results;
    return res.send(temp);
  });
};
