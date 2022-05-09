module.exports = function answerIncorrectly(gameRepository){
  const game = gameRepository.getGame();
  return game.wasIncorrectlyAnswered()
}
