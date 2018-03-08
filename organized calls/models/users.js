var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
  user: String,
  name: String,
  password: String,
  profession: String,
  artstyle: Array,
  id: Number,
  ledit: String
});

mongoose.model('users', UserSchema);
