const Game = require('./src/Game');
const { prototypeData } = require('./src/data');

const game = new Game(prototypeData);

console.log(game.start());
game.printMessage();
game.printQuestion();

