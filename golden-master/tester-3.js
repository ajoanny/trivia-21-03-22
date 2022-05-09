const Game = require('../application/cli');

const game = new Game();

game.add('Karam');
game.add('Jérémie');
game.add('Quentin');


game.play(6);
game.answerCorrectly();

game.play(6);
game.answerCorrectly();

game.play(6);
game.answerCorrectly();

game.play(6);
game.answerCorrectly();

game.play(6);
game.answerCorrectly();
