exports = typeof window !== "undefined" && window !== null ? window : global;
const Game = require("../domain/model/game")
const GameRepository = require('../infrastructure/repositories/game-file-repository');
const play = require('../domain/usecases/play-usecase');
const answerCorrectly = require('../domain/usecases/correctly-answered-usecase');
const answerIncorrectly = require('../domain/usecases/incorrectly-answered-usecase');
const addPlayer = require('../domain/usecases/add-player-usecase');
const addPlayerPresenter = require('../application/presenter/add-player-presenter');
const playPresenter = require('../application/presenter/play-presenter');
const answerCorrectlyPresenter = require('../application/presenter/correctly-answered-presenter')
const answerIncorrectlyPresenter = require('../application/presenter/incorrectly-answered-presenter')

module.exports = function Cli() {
    var popQuestions     = new Array();
    var scienceQuestions = new Array();
    var sportsQuestions  = new Array();
    var rockQuestions    = new Array();

    this.createRockQuestion = function(index){
        return "Rock Question "+index;
    };
    for(var i = 0; i < 50; i++){
        popQuestions.push("Pop Question "+i);
        scienceQuestions.push("Science Question "+i);
        sportsQuestions.push("Sports Question "+i);
        rockQuestions.push(this.createRockQuestion(i));
    };

    const gameRepository = new GameRepository();
    const game = new Game({ popQuestions, scienceQuestions, sportsQuestions, rockQuestions });
    gameRepository.saveGame(game);



    this.add = function(playerName){
        const state = addPlayer(playerName, gameRepository)

        addPlayerPresenter(state);

        return true;
    };

    this.play = function(r){
       const state = play(r, gameRepository);
       playPresenter(state);
    };

    this.answerCorrectly = function(){
        const state = answerCorrectly(gameRepository);

        answerCorrectlyPresenter(state);

        return state.winner;
    };

    this.answerIncorrectly = function(){
        const player = answerIncorrectly(gameRepository);
        answerIncorrectlyPresenter(player)
        return true;
    };
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
