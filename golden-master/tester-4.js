const Game = require('../application/cli');

const game = new Game();

game.add('Karam');
game.add('Jérémie');
game.add('Quentin');

//K
game.roll(6);
game.wrongAnswer();

//J
game.roll(6);
game.wrongAnswer();

//Q
game.roll(6);
game.wrongAnswer();

//K
game.roll(2);
game.wrongAnswer();

//J
game.roll(2);
game.wrongAnswer();

//Q
game.roll(2);
game.wasCorrectlyAnswered();

//K
game.roll(3);
game.wasCorrectlyAnswered();

module.exports = {

}
