const chai = require('chai');
const assert = chai.assert;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const { prototypeData } = require('../src/data');

describe('Game', () => {
    let game;
    beforeEach(() => {
        game = new Game(prototypeData);
    });

    it('should be able to start a new game', () => {
        assert.equal(game.start(), 'Welcome to FlashCards! You are playing with 30 cards.\n    -----------------------------------------------------------------------');
    });

    it('should create and put cards in deck when starting game', () => {
        game.start();
        assert.instanceOf(game.currentRound.deck, Deck)
        assert.equal(game.currentRound.deck.countCards(), 30);
    });

    it('should keep track of the current round', () => {
        game.start();
        assert.instanceOf(game.currentRound, Round);
    });
});
