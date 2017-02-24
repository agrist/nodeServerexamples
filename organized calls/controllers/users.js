var mongoose = require('mongoose'),
User = mongoose.model('users');

exports.findAll = function(req, res) {
  User.find({},function(err, results) {
    return res.send(results);
  });

};
exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};
