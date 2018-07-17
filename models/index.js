var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fantasy-app", { useNewUrlParser: true });

const Player = require('./players.js');

const Game = require('./games.js');

module.exports = {
  Player: require('./players.js'),
  Game : require('./games.js')
};
