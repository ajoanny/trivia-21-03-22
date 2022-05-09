const Game = require('../application/cli');

const game = new Game();

game.add('Arthur');
game.add('Karam');
game.add('Jérémie');
game.add('Clément');

// TOUR 1

// Arthur
game.play(1);
game.answerIncorrectly();

// Karam
game.play(1);
game.answerCorrectly();

// Jérémie
game.play(1);
game.answerCorrectly();

// Clément
game.play(1);
game.answerCorrectly();

// TOUR 2

// Arthur ne sort pas de prison
game.play(2);

// Arthur sort de prison
game.play(1);
game.answerCorrectly();

// Karam
game.play(1);
game.answerCorrectly();

// Jérémie
game.play(1);
game.answerCorrectly();

// Clément
game.play(1);
game.answerCorrectly();
