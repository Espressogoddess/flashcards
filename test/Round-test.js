const chai = require('chai');
const assert = chai.assert;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;

    beforeEach(() => {
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });

    it('should have a deck property', () => {
        assert.instanceOf(round.deck, Deck);
        assert.equal(round.deck.countCards(), 3);
    });

    it('should return the current card', () => {
        assert.equal(round.returnCurrentCard(), card1);
    });

    it('should update the current card after taking a turn', () => {
        round.takeTurn();
        assert.equal(round.returnCurrentCard(), card2);
    });


    it('should start the turn count at 0', () => {
        assert.equal(round.turnCount, 0);
    });

    it('should update the turn count after taking turn', () => {
        assert.equal(round.turnCount, 0);
        round.takeTurn();
        assert.equal(round.turnCount, 1);
        round.takeTurn();
        round.takeTurn();
        assert.equal(round.turnCount, 3);
    });

    it('should record cardIds for incorrect guesses', () => {
        round.takeTurn('otter');

        assert.deepEqual(round.incorrectGuessIds, [1]);
        assert.deepEqual(round.correctGuessIds, []);
    });

    it('should give feedback after taking turn', () => {
        assert.equal(round.takeTurn('otter'), 'incorrect!');
    });

    it('should record card Ids if guess is correct', () => {
        round.takeTurn('object');

        assert.deepEqual(round.incorrectGuessIds, []);
        assert.deepEqual(round.correctGuessIds, [1]);
    });

    it('should evaluate guess for different card', () => {
        round.takeTurn('object');

        assert.deepEqual(round.incorrectGuessIds, []);
        assert.deepEqual(round.correctGuessIds, [1]);

        round.takeTurn("array");

        assert.deepEqual(round.incorrectGuessIds, []);
        assert.deepEqual(round.correctGuessIds, [1, 2]);

        round.takeTurn('array');

        assert.deepEqual(round.incorrectGuessIds, [3]);
        assert.deepEqual(round.correctGuessIds, [1, 2]);
    });

    it('should calculate the percentage of correct guesses', () => {
        assert.equal(round.calculatePercentageCorrect(), '0%');

        round.takeTurn('object');

        assert.equal(round.calculatePercentageCorrect(), '100%');

        round.takeTurn('array');

        assert.equal(round.calculatePercentageCorrect(), '100%');

        round.takeTurn('array');

        assert.equal(round.calculatePercentageCorrect(), '67%');

    });

    it('should be able to end a round with no correct answers', () => {
        round.takeTurn('array');
        round.takeTurn('object');

        assert.equal(round.endRound(), '**Round over!** You answered 0% of the questions correctly!');
    });

    it('should be able to end a round with all correct answers', () => {
        round.takeTurn('object');
        round.takeTurn('array');

        assert.equal(round.endRound(), '**Round over!** You answered 100% of the questions correctly!');
    });

    it('should be able to end a round with some correct answers', () => {
        round.takeTurn('object');
        round.takeTurn('array');
        round.takeTurn('array')

        assert.equal(round.endRound(), '**Round over!** You answered 67% of the questions correctly!');
    });

});