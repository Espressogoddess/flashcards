const chai = require('chai');
const assert = chai.assert;

const Deck = require('../src/Deck');
const {prototypeData} = require('')

describe('Deck', () => {
    let deck;
    beforeEach(() => {
        deck = Deck({prototypeData});
    })

    it('should be initialized with an array of Card objects', () => {
    assert.deepEqual(Deck,)
    });

    it('should have a method that counts the cards in the deck', () => {
    assert.lengthOf(deck.countCards(), 30);
    });
})