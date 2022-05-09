const Game = require('../application/cli');

const game = new Game();

game.add('Karam');
game.add('Jérémie');
game.add('Quentin');

//K
game.play(6);
game.answerIncorrectly();

//J
game.play(6);
game.answerIncorrectly();

//Q
game.play(6);
game.answerIncorrectly();

//K
game.play(2);
game.answerIncorrectly();

//J
game.play(2);
game.answerIncorrectly();

//Q
game.play(2);
game.answerCorrectly();

//K
game.play(3);
game.answerCorrectly();

module.exports = {

}
