module.exports = function answerIncorrectly(gameRepository){
  const game = gameRepository.getGame();
  const status = game.wasIncorrectlyAnswered()
  gameRepository.saveGame(game);
  return status;
}
