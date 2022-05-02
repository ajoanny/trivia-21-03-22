exports = typeof window !== "undefined" && window !== null ? window : global;
const Game = require("../domain/model/game")

module.exports = function Cli() {
    var popQuestions     = new Array();
    var scienceQuestions = new Array();
    var sportsQuestions  = new Array();
    var rockQuestions    = new Array();

    const game = new Game({ popQuestions, scienceQuestions, sportsQuestions, rockQuestions });


    this.createRockQuestion = function(index){
        return "Rock Question "+index;
    };

    for(var i = 0; i < 50; i++){
        popQuestions.push("Pop Question "+i);
        scienceQuestions.push("Science Question "+i);
        sportsQuestions.push("Sports Question "+i);
        rockQuestions.push(this.createRockQuestion(i));
    };

    this.add = function(playerName){
        const { playerName : name, playersCount } = _add(playerName)

        console.log(name + " was added");
        console.log("They are player number " + playersCount);

        return true;
    };

    _add = function(playerName) {
        return game.add(playerName);
    }


    this.roll = function(r){
       const { player, place, inPrison, category, question, roll, isGettingOutOfPenaltyBox } =  _roll(r)

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

    _roll = function(dice){
        return game.roll(dice)
    }

    this.wasCorrectlyAnswered = function(){
        const {canWinCoin, purse, player, winner} = _wasCorrectlyAnswered();

        if(canWinCoin){
            console.log('Answer was correct!!!!');
            console.log(player + " now has " +
                purse  + " Gold Coins.");
        }

        return winner;
    };

    _wasCorrectlyAnswered = function(){
        return game.wasCorrectlyAnswered()
    }

    this.wrongAnswer = function(){
        const player = _wasIncorrectlyAnswered();
        console.log('Question was incorrectly answered');
        console.log(player + " was sent to the penalty box");
        return true;
    };

    _wasIncorrectlyAnswered = function (){
        return game.wasIncorrectlyAnswered()
    }

};



// var notAWinner = false;
//
// var game = new Game();
//
// game.add('Chet');
// game.add('Pat');
// game.add('Sue');
//
// do{
//
//     game.roll(Math.floor(Math.random()*6) + 1);
//
//     if(Math.floor(Math.random()*10) == 7){
//         notAWinner = game.wrongAnswer();
//     }else{
//         notAWinner = game.wasCorrectlyAnswered();
//     }

// }while(notAWinner);
