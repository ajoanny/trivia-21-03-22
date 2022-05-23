const fs = require("fs");
const path = require("path");
const Game = require("../../domain/model/game")

class GameFileRepository {
    getGame() {
        const data = fs.readFileSync(path.join(__dirname, "game.txt"));
        const lines = data.toString().split("\n");
        const [currentPlayerIndex, ...playersFromFile] = lines;

        const players      = new Array();
        const places       = new Array();
        const purses       = new Array();
        const inPenaltyBoxes = new Array();

        playersFromFile.pop();

        playersFromFile.forEach((line) => {
            const [name, position, purse, inPenaltyBox] = line.split(" ");
            players.push(name);
            places.push(position);
            purses.push(purse);
            inPenaltyBoxes.push(inPenaltyBox);
        });

        const popQuestions = fs.readFileSync(path.join(__dirname, "pop.txt")).toString().split('\n');
        const scienceQuestions = fs.readFileSync(path.join(__dirname, "science.txt")).toString().split('\n');
        const sportsQuestions = fs.readFileSync(path.join(__dirname, "sport.txt")).toString().split('\n');
        const rockQuestions = fs.readFileSync(path.join(__dirname, "rock.txt")).toString().split('\n');
        popQuestions.pop();
        scienceQuestions.pop();
        sportsQuestions.pop();
        rockQuestions.pop();

        return Game.build({currentPlayerIndex, players, places, purses, inPenaltyBoxes, popQuestions, scienceQuestions, sportsQuestions, rockQuestions});
    }

    saveGame(game) {
        const snapshot = game.snapshot();
        const lines = [
            snapshot.currentPlayer,
            ...snapshot.players.map(({ name, position, purses, inPenaltyBox}) => `${name} ${position} ${purses} ${inPenaltyBox}`),
        ];
        fs.writeFileSync(path.join(__dirname, "game.txt"), lines.join('\n'));
        fs.writeFileSync(path.join(__dirname, "pop.txt"), snapshot.pop.join('\n'));
        fs.writeFileSync(path.join(__dirname, "science.txt"), snapshot.science.join('\n'));
        fs.writeFileSync(path.join(__dirname, "sport.txt"), snapshot.sport.join('\n'));
        fs.writeFileSync(path.join(__dirname, "rock.txt"), snapshot.rock.join('\n'));
    }


    saveGameTest() {
        var popQuestions     = new Array();
        var scienceQuestions = new Array();
        var sportsQuestions  = new Array();
        var rockQuestions    = new Array();

        for(var i = 0; i < 50; i++){
            popQuestions.push("Pop Question "+i);
            scienceQuestions.push("Science Question "+i);
            sportsQuestions.push("Sports Question "+i);
            rockQuestions.push("Rocks Question "+i);
        };
        const game = new Game({ popQuestions, scienceQuestions, sportsQuestions, rockQuestions });

        game.add('Arthur');
        game.add('Karam');
        game.add('Jérémie');
        game.add('Clément');
        game.roll(1);
        game.wasIncorrectlyAnswered();
        game.roll(1);
        game.wasCorrectlyAnswered();
        game.roll(1);
        game.wasCorrectlyAnswered();
        game.roll(1);
        game.wasCorrectlyAnswered();
        game.roll(2);
        game.roll(1);
        game.wasCorrectlyAnswered();
        game.roll(1);
        game.wasCorrectlyAnswered();
        game.roll(1);
        game.wasCorrectlyAnswered();

        this.saveGame(game);
    }
}

module.exports = GameFileRepository;
