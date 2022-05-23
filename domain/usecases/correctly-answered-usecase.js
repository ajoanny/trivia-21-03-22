module.exports = function answerCorrectly(gameRepository){
  const game = gameRepository.getGame();
  const status = game.wasCorrectlyAnswered();
  gameRepository.saveGame(game);

  return status;
}
