class Game {
  constructor(params) {
      this.players          = new Array();
      this.places           = new Array(6);
      this.purses           = new Array(6);
      this.inPenaltyBox     = new Array(6);
      
      this.popQuestions     = params.popQuestions;
      this.scienceQuestions = params.scienceQuestions;
      this.sportsQuestions  = params.sportsQuestions;
      this.rockQuestions    = params.rockQuestions;
      
      this.currentPlayer    = 0;
      this.isGettingOutOfPenaltyBox = false;
  }
  roll (roll){
      let category;
      let question;
      const player = this.players[this.currentPlayer];
      let place = this.places[this.currentPlayer];
      const inPrison = this.inPenaltyBox[this.currentPlayer]
  
      if(inPrison && (roll % 2 == 0)) {
          this.isGettingOutOfPenaltyBox = false;
      } else {
          if(roll % 2 == 1 && inPrison) {
              this.isGettingOutOfPenaltyBox = true;
          }
  
          place = place + roll;
          if(place > 11){
              place = place - 12;
          }
          this.places[this.currentPlayer] = place;
          category = this.currentCategory();
      }
  
      if(category == 'Pop')
              question = this.popQuestions.shift();
          if(category == 'Science')
              question = this.scienceQuestions.shift();
          if(category == 'Sports')
              question = this.sportsQuestions.shift();
          if(category == 'Rock')
              question = this.rockQuestions.shift();
      return { player, place, inPrison, category, question, roll, isGettingOutOfPenaltyBox: this.isGettingOutOfPenaltyBox };
  }
  currentCategory(){
      if(this.places[this.currentPlayer] == 0)
          return 'Pop';
      if(this.places[this.currentPlayer] == 4)
          return 'Pop';
      if(this.places[this.currentPlayer] == 8)
          return 'Pop';
      if(this.places[this.currentPlayer] == 1)
          return 'Science';
      if(this.places[this.currentPlayer] == 5)
          return 'Science';
      if(this.places[this.currentPlayer] == 9)
          return 'Science';
      if(this.places[this.currentPlayer] == 2)
          return 'Sports';
      if(this.places[this.currentPlayer] == 6)
          return 'Sports';
      if(this.places[this.currentPlayer] == 10)
          return 'Sports';
      return 'Rock';
  };
  wasCorrectlyAnswered(){
      const canWinCoin = this.isGettingOutOfPenaltyBox || !this.inPenaltyBox[this.currentPlayer];
      const player = this.players[this.currentPlayer];
      if(canWinCoin){
          this.purses[this.currentPlayer] += 1;
      }
      const purse = this.purses[this.currentPlayer];
  
      const winner = this.didPlayerWin();
      this.nextPlayer();
      
      return {canWinCoin, purse, player, winner};
  }
  nextPlayer() {
      this.currentPlayer += 1;
      if(this.currentPlayer == this.players.length)
      this.currentPlayer = 0;
  }
  didPlayerWin(){
      return !(this.purses[this.currentPlayer] == 6)
  };
  wasIncorrectlyAnswered (){
      this.inPenaltyBox[this.currentPlayer] = true;
      const player = this.players[this.currentPlayer];
      this.nextPlayer();
      return player;
  }
  add(playerName){
      this.places[this.howManyPlayers()] = 0;
      this.purses[this.howManyPlayers()] = 0;
      this.inPenaltyBox[this.howManyPlayers()] = false;
      this.players.push(playerName);

      return {playerName, playersCount: this.players.length};
  }
  howManyPlayers(){
      return this.players.length;
  };
}

module.exports = Game;
