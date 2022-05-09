const Cli = require('../application/cli');

const cli = new Cli();

cli.add('Arthur');
cli.add('Karam');
cli.add('Jérémie');
cli.add('Clément');

let notAWinner = false;
for (let i = 0; i <= 21; i++) {
    cli.play(1);
    notAWinner = cli.answerCorrectly();

    if (!notAWinner) {
        console.log('Game ended');
    }
}
