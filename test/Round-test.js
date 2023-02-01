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
        assert.deepEqual(round.deck, [
            {
            id: 1,
            question: "What allows you to define a set of related information using key-value pairs?",
            answers: ["object", "array", "function"],
            correctAnswer: "object"
          }, {
            id: 2,
            question: "What is a comma-separated list of related values?",
            answers: ["array", "object", "function"],
            correctAnswer: "array"
          }, {
            id: 3,
            question: "What type of prototype method directly modifies the existing array?",
            answers: ["mutator method", "accessor method", "iteration method"],
            correctAnswer: "mutator method"
          }
        ]);
    });

    it('should store the current card as the first card in the deck', () => {
        assert.deepEqual(round.currentCard, {
            id: 1,
            question: "What allows you to define a set of related information using key-value pairs?",
            answers: ["object", "array", "function"],
            correctAnswer: "object"
          });
    });
}
);