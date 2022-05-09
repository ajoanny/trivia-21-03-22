module.exports = function addPlayer(playerName, gameRepository) {
  const game = gameRepository.getGame();
  return game.add(playerName);
}
