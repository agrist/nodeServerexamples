var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
  user: String,
  name: String,
  //password: String,
  proffession: String,
  id: Number
});

mongoose.model('users', UserSchema);
