const chai = require('chai');
const assert = chai.assert;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Game', () => {
    let game;
    beforeEach(() => {
        game = new Game();
    });

    it('should be able to start a new game', () => {
        game.start();
        assert.instanceOf(game.currentRound, Round)
    });

    it('should create and put cards in deck when starting game', () => {
        game.start();
        assert.instanceOf(game.currentRound.deck[0], Card)
    });

    it('should keep track of the current round', () => {
        game.start();
        assert.instanceOf(game.currentRound, Round);
    });
});

