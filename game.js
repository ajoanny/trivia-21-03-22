exports = typeof window !== "undefined" && window !== null ? window : global;

module.exports = function Game() {
    var players          = new Array();
    var places           = new Array(6);
    var purses           = new Array(6);
    var inPenaltyBox     = new Array(6);

    var popQuestions     = new Array();
    var scienceQuestions = new Array();
    var sportsQuestions  = new Array();
    var rockQuestions    = new Array();

    var currentPlayer    = 0;
    var isGettingOutOfPenaltyBox = false;

    var didPlayerWin = function(){
        return !(purses[currentPlayer] == 6)
    };

    var currentCategory = function(){
        if(places[currentPlayer] == 0)
            return 'Pop';
        if(places[currentPlayer] == 4)
            return 'Pop';
        if(places[currentPlayer] == 8)
            return 'Pop';
        if(places[currentPlayer] == 1)
            return 'Science';
        if(places[currentPlayer] == 5)
            return 'Science';
        if(places[currentPlayer] == 9)
            return 'Science';
        if(places[currentPlayer] == 2)
            return 'Sports';
        if(places[currentPlayer] == 6)
            return 'Sports';
        if(places[currentPlayer] == 10)
            return 'Sports';
        return 'Rock';
    };

    this.createRockQuestion = function(index){
        return "Rock Question "+index;
    };

    for(var i = 0; i < 50; i++){
        popQuestions.push("Pop Question "+i);
        scienceQuestions.push("Science Question "+i);
        sportsQuestions.push("Sports Question "+i);
        rockQuestions.push(this.createRockQuestion(i));
    };

    this.isPlayable = function(howManyPlayers){
        return howManyPlayers >= 2;
    };

    this.add = function(playerName){
        places[this.howManyPlayers()] = 0;
        purses[this.howManyPlayers()] = 0;
        inPenaltyBox[this.howManyPlayers()] = false;
        players.push(playerName);

        console.log(playerName + " was added");
        console.log("They are player number " + players.length);

        return true;
    };

    this.howManyPlayers = function(){
        return players.length;
    };

    this.roll = function(r){
       const { player, place, inPrison, category, question, roll } =  _roll(r)
        
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

    _roll = function(roll){
        let category;
        let question;
        const player = players[currentPlayer];
        let place = places[currentPlayer];
        const inPrison = inPenaltyBox[currentPlayer]

        if(inPrison && (roll % 2 == 0)) {
            isGettingOutOfPenaltyBox = false;
        } else {
            if(roll % 2 == 1 && inPrison) {
                isGettingOutOfPenaltyBox = true;
            }
    
            place = place + roll;
            if(place > 11){
                place = place - 12;
            }
            places[currentPlayer] = place;
            category = currentCategory();
        }

        if(category == 'Pop')
                question = popQuestions.shift();
            if(category == 'Science')
                question = scienceQuestions.shift();
            if(category == 'Sports')
                question = sportsQuestions.shift();
            if(category == 'Rock')
                question = rockQuestions.shift();
        return { player, place, inPrison, category, question, roll };
    }

    this.wasCorrectlyAnswered = function(){
            if(isGettingOutOfPenaltyBox || !inPenaltyBox[currentPlayer]){
                console.log('Answer was correct!!!!');
                purses[currentPlayer] += 1;
                console.log(players[currentPlayer] + " now has " +
                    purses[currentPlayer]  + " Gold Coins.");
            }

        var winner = didPlayerWin();
        this.nextPlayer();
        return winner;
    };

    this.wrongAnswer = function(){
        console.log('Question was incorrectly answered');
        console.log(players[currentPlayer] + " was sent to the penalty box");
        inPenaltyBox[currentPlayer] = true;

        this.nextPlayer();
        return true;
    };

    this.nextPlayer = function() {
        currentPlayer += 1;
        if(currentPlayer == players.length)
        currentPlayer = 0;
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
