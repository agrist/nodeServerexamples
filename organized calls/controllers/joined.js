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
         combination.user = results;
         Painter.find({style: {$in:['High Renaissance', 'Northen Renaissance']}}, function(err, results){
          if(err){
            console.log(err);
            return res.send(combination);
          }
          //console.log(results);
          combination.Painters =  results;
          return res.send(combination);
        });


        }
    });
    //don't leave the result sending outside, as it will trigger before the actual db calls have finished !
  //  res.send(combination);
}
