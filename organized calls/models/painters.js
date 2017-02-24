var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PainterSchema = new Schema({
  name: String,
  style: String,
  century: String
});

mongoose.model('Painter', PainterSchema);
