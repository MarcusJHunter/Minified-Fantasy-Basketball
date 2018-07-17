var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: String,
  team: String,
  ppg: Number
});

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
