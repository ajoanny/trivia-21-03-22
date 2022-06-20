const Cli = require('../application/cli');

const cli = new Cli();

cli.add('Arthur');
cli.add('Karam');
cli.add('Jérémie');
cli.add('Clément');

let isWinner = false;
for (let i = 0; i <= 21; i++) {
    cli.play(1);
    isWinner = cli.answerCorrectly();

    if (isWinner) {
        console.log('Game ended');
    }
}
