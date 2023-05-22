
const { Server, Origins } = require('boardgame.io/server');
const {TicTacToe} = require('./Game');
const { BangGame } =  require ('./BangGame');

const server = Server({
  games: [BangGame],
  origins: [Origins.LOCALHOST],
});

server.run(8000);