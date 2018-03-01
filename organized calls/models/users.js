var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
  user: String,
  name: String,
  password: String,
  profession: String,
  id: Number
});

mongoose.model('users', UserSchema);
