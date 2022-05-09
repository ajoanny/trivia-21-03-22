class GameRepository {
  getGame() {
    return this.game;
  }

  saveGame(game) {
    this.game = game;
  }
}

module.exports = GameRepository;
