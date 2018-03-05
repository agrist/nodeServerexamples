var mongoose = require('mongoose'),
Painter = mongoose.model('Painter');

exports.findAll = function(req, res) {
  Painter.find({},function(err, results) {
   return res.send(results);
 });
};

exports.findById = function(req, res) {
  Painter.find({'id': req.params.id},function(err, results){return res.send(results);});
};

exports.findByStyle = function(req, res) {
    Painter.find({'style': req.params.style},function(err, results){return res.send(results);});
};

exports.add = function(req, res) {
  Painter.find({style: {$in:['High Renaissance', 'Northen Renaissance']}}, function(err, results){
   if(err){
     console.log(err);
   }
   return res.send(results);
 });
};
exports.update = function(req, res) {};
exports.delete = function(req, res) {};
