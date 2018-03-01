var mongoose = require('mongoose'),
user = mongoose.model('users'); //Mongoose automatically looks for the plural version of your model name.

exports.findAll = function(req, res) {
  user.find({},function(err, results) {
    return res.send(results);
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

    console.log(userObj);
    //user.insert(userObj);
    //^ would work if no id is needed back. We need it, so we are using save with a callback
    user.create(userObj, function (err, small) {
      if (err) return handleError(err);
      return res.send(userObj);
    });
  }else{
    //console.log("Wrong user info found in request:     ");
    //console.log(req);
    return res.send("Wrong user info found in request!");
  }
};


exports.update = function(req, res) {
  var findingQuery = {'_id':req.body.id};
  var newvalues = {$set: {name: "NewDwarf", profession: "Baker", user:"dwarf12"}};// will set specific fields to given values
  user.updateOne(findingQuery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
  });
};


exports.delete = function(req, res) {
  if(req.body.id){
    var query = {'_id': req.body.id};
    user.remove(query ,function(err, results) {
      //console.log(results);
      return res.send(results);
    });
  }else{
      return res.send("Wrong user info found in request!");
  }
};


exports.findByName = function(req, res) {
  var name = req.body.name || req.params.name;// || 'sleepy';
  user.find({'name': name},function(err, results){
    console.log(results);
    return res.send(results);
  });
};
