var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema ({
   player: String,
   game1: Number,
   game2: Number,
   game3: Number,

});

var Game = mongoose.model('Games', GameSchema);

module.exports = Game;
