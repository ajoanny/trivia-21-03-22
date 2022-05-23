module.exports = function addPlayer(playerName, gameRepository) {
  const game = gameRepository.getGame();
  const status =  game.add(playerName);
  gameRepository.saveGame(game);
  return status;
}
