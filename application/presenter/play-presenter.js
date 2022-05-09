module.exports = function playPresenter({ player, place, inPrison, category, question, roll, isGettingOutOfPenaltyBox }) {
  console.log( player + " is the current player");
  console.log("They have rolled a " + roll);

  if(inPrison && !isGettingOutOfPenaltyBox) {
    console.log( player + " is not getting out of the penalty box");
  }

  if(isGettingOutOfPenaltyBox && inPrison) {
    console.log( player + " is getting out of the penalty box");
  }

  if(category){
    console.log( player + "'s new location is " + place);
    console.log("The category is " + category);
    console.log(question);
  }
};
