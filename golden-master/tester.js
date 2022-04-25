const Cli = require('../application/cli');

const cli = new Cli();

cli.add('Arthur');
cli.add('Karam');
cli.add('Jérémie');
cli.add('Clément');

let notAWinner = false;
for (let i = 0; i <= 21; i++) {
    cli.roll(1);
    notAWinner = cli.wasCorrectlyAnswered();

    if (!notAWinner) {
        console.log('Game ended');
    }
}
