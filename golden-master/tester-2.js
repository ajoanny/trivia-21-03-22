const Game = require('../application/cli');

const game = new Game();

game.add('Arthur');
game.add('Karam');
game.add('Jérémie');
game.add('Clément');

// TOUR 1

// Arthur
game.roll(1);
game.wrongAnswer();

// Karam
game.roll(1);
game.wasCorrectlyAnswered();

// Jérémie
game.roll(1);
game.wasCorrectlyAnswered();

// Clément
game.roll(1);
game.wasCorrectlyAnswered();

// TOUR 2

// Arthur ne sort pas de prison
game.roll(2);

// Arthur sort de prison
game.roll(1);
game.wasCorrectlyAnswered();

// Karam
game.roll(1);
game.wasCorrectlyAnswered();

// Jérémie
game.roll(1);
game.wasCorrectlyAnswered();

// Clément
game.roll(1);
game.wasCorrectlyAnswered();
