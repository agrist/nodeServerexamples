var mongoose = require('mongoose'),
Painter = mongoose.model('Painter');

exports.import = function(req, res){
  Musician.create(
    { "name": "Ben", "band": "DJ Code Red", "instrument": "Reason" },
    { "name": "Mike D.","band": "Kingston Kats", "instrument": "drums" },
    { "name": "Eric", "band": "Eric", "instrument": "piano" },
    { "name": "Paul", "band": "The Eyeliner", "instrument": "guitar" } , function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};



exports.findAll = function() {
  Painter.find({},function(err, results) { //find({}) finds everything
   return res.send(results);
 });
};
exports.findById = function() {};
exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};
