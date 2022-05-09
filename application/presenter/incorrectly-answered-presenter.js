module.exports = function answerIncorrectlyPresenter(player) {
  console.log('Question was incorrectly answered');
  console.log(player + " was sent to the penalty box");
  return true;
}
