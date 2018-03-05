var mongoose = require('mongoose'),
Painter = mongoose.model('Painter');
User = mongoose.model('users');


exports.findFirst = function(req, res){
  var combination = {};
  User.findOne({id: 2}, function(err, results){
      if(err){
        console.log(err);
        return res.send(combination);
      }else{
        //console.log(results);
        //note - results may have more elements then the schema allows, but available will be only the schema elements
         combination.user = results;
         Painter.find({style: {$in:combination.user.artstyle}}, function(err, results2){
          if(err){
            console.log(err);
            return res.send(combination);
          }
          //console.log(results);
          combination.Painters =  results2;
          return res.send(combination);
        });


        }
    });
    //don't leave the result sending outside, as it will trigger before the actual db calls have finished !
  //  res.send(combination);
}
