const chai = require('chai');
const assert = chai.assert;

const Game = require('../src/Game');
const Round = require('../src/Round')

describe('Game', () => {
    it('should keep track of the current round', () => {
        const game = new Game();
        assert.equal(game.currentRound, undefined);
        game.start();

        assert.instanceOf(game.currentRound, Round);
    });
});

