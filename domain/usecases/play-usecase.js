module.exports = function play(dice, gameRepository) {
  const game = gameRepository.getGame();
  const status = game.roll(dice);
  gameRepository.saveGame(game);
  return status;
}
