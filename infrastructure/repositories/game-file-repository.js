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

      return new Game({currentPlayerIndex, players, places, purses, inPenaltyBoxes});
    }
}

module.exports = GameFileRepository;
