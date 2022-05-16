const fs = require("fs");
const path = require("path");

class GameFileRepository {
    getGame() {
        const data = fs.readFileSync(path.join(__dirname, "game.txt"));

        console.log(data.toString());
    }
}

module.exports = GameFileRepository;
