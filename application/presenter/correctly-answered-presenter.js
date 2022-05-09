module.exports = function answerCorrectlyPresenter({canWinCoin, purse, player, winner}) {
  if(canWinCoin){
    console.log('Answer was correct!!!!');
    console.log(player + " now has " +
      purse  + " Gold Coins.");
  }

  // TODO refactor
  return winner;
}
