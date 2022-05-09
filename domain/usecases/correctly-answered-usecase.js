module.exports = function answerCorrectly(gameRepository){
  const game = gameRepository.getGame();
  return game.wasCorrectlyAnswered();
}
