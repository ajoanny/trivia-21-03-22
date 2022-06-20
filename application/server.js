const Hapi = require('@hapi/hapi');
const addPlayer = require('../domain/usecases/add-player-usecase');
const GameRepository = require('../infrastructure/repositories/game-file-repository');
const Game = require('../domain/model/game');
const play = require('../domain/usecases/play-usecase');
const answerCorrectly = require('../domain/usecases/correctly-answered-usecase');
const answerIncorrectly = require('../domain/usecases/incorrectly-answered-usecase');

const popQuestions     = new Array();
const scienceQuestions = new Array();
const sportsQuestions  = new Array();
const rockQuestions    = new Array();

for(let i = 0; i < 50; i++){
  popQuestions.push("Pop Question "+i);
  scienceQuestions.push("Science Question "+i);
  sportsQuestions.push("Sports Question "+i);
  rockQuestions.push("Rock Question "+i);
}

const gameRepository = new GameRepository();
const game = new Game({ popQuestions, scienceQuestions, sportsQuestions, rockQuestions });
gameRepository.saveGame(game);

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'POST',
    path: '/add',
    handler: (request, h) => {

      const state = addPlayer(request.payload.playerName, gameRepository)
      return h.response(state);

    }
  });

  server.route({
    method: 'POST',
    path: '/play',
    handler: (request, h) => {

      const state = play(request.payload.r, gameRepository);
      return h.response(state);

    }
  });

  server.route({
    method: 'POST',
    path: '/answer-correctly',
    handler: (request, h) => {

      const state = answerCorrectly(gameRepository);
      return h.response(state.winner);

    }
  });

  server.route({
    method: 'POST',
    path: '/answer-incorrectly',
    handler: (request, h) => {

      answerIncorrectly(gameRepository);
      return h.response(true);

    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
