const Game = require('../application/cli');

const game = new Game();

game.add('Karam');
game.add('Jérémie');
game.add('Quentin');


game.roll(6);
game.wasCorrectlyAnswered();

game.roll(6);
game.wasCorrectlyAnswered();

game.roll(6);
game.wasCorrectlyAnswered();

game.roll(6);
game.wasCorrectlyAnswered();

game.roll(6);
game.wasCorrectlyAnswered();
