var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PainterSchema = new Schema({
  name: String,
  style: String,
  birthy: Number,
  deathy: Number,
  notes: {type: String, default: "No notes yet"},
  ledit: {type: Date, default: Date.now}
});

mongoose.model('Painter', PainterSchema);
