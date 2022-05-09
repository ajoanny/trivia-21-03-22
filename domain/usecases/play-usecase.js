module.exports = function play(dice, gameRepository) {
  const game = gameRepository.getGame();
  return game.roll(dice)
}
