const Game = require('../game');

const game = new Game();

game.add('Arthur');
game.add('Karam');
game.add('Jérémie');
game.add('Clément');

let notAWinner = false;
for (let i = 0; i <= 21; i++) {
    game.roll(1);
    notAWinner = game.wasCorrectlyAnswered();

    if (!notAWinner) {
        console.log('Game ended');
    }
}
