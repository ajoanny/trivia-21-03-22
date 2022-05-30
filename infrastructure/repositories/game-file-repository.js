const fs = require("fs");
const path = require("path");
const Game = require("../../domain/model/game")

class GameFileRepository {
    getGame() {
        const data = fs.readFileSync(path.join(__dirname, "game.txt"));
        const lines = data.toString().split("\n");
        const [currentPlayerIndex, isGettingOutOfPenaltyBox, ...playersFromFile] = lines;
        const players      = new Array();
        const places       = new Array();
        const purses       = new Array();
        const inPenaltyBoxes = new Array();

        playersFromFile
            .filter((line) => line != '\n')
            .forEach((line) => {
            const [name, position, purse, inPenaltyBox] = line.split(" ");
            players.push(name);
            places.push(parseInt(position));
            purses.push(parseInt(purse));
            inPenaltyBoxes.push(inPenaltyBox === 'true');
        });

        const popQuestions = fs.readFileSync(path.join(__dirname, "pop.txt")).toString().split('\n');
        const scienceQuestions = fs.readFileSync(path.join(__dirname, "science.txt")).toString().split('\n');
        const sportsQuestions = fs.readFileSync(path.join(__dirname, "sport.txt")).toString().split('\n');
        const rockQuestions = fs.readFileSync(path.join(__dirname, "rock.txt")).toString().split('\n');
        if(popQuestions[popQuestions.length-1] === '\n'){
            popQuestions.pop();
        }
        if(scienceQuestions[scienceQuestions.length-1] === '\n'){
            scienceQuestions.pop();
        }
        if(sportsQuestions[sportsQuestions.length-1] === '\n'){
            sportsQuestions.pop();
        }
        if(rockQuestions[rockQuestions.length-1] === '\n'){
            rockQuestions.pop();
        }

        const g = Game.build({currentPlayerIndex: parseInt(currentPlayerIndex), isGettingOutOfPenaltyBox: isGettingOutOfPenaltyBox === 'true', players, places, purses, inPenaltyBox: inPenaltyBoxes, popQuestions, scienceQuestions, sportsQuestions, rockQuestions});

        return g;
    }

    saveGame(game) {
        const snapshot = game.snapshot();
        const lines = [
            snapshot.currentPlayer,
            snapshot.isGettingOutOfPenaltyBox,
            ...snapshot.players.map(({ name, position, purses, inPenaltyBox}) => `${name} ${position} ${purses} ${inPenaltyBox}`),
        ];
        fs.writeFileSync(path.join(__dirname, "game.txt"), lines.join('\n'));
        fs.writeFileSync(path.join(__dirname, "pop.txt"), snapshot.pop.join('\n'));
        fs.writeFileSync(path.join(__dirname, "science.txt"), snapshot.science.join('\n'));
        fs.writeFileSync(path.join(__dirname, "sport.txt"), snapshot.sport.join('\n'));
        fs.writeFileSync(path.join(__dirname, "rock.txt"), snapshot.rock.join('\n'));
    }
}

module.exports = GameFileRepository;
