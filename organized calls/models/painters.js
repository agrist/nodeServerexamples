var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PainterSchema = new Schema({
  name: String,
  style: String,
  birthy: Number,
  deathy: Number
});

mongoose.model('Painter', PainterSchema);
