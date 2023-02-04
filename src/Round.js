const Turn = require('./Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turnCount = 0;
        this.incorrectGuessIds = [];
        this.correctGuessIds = [];
    }
    returnCurrentCard() {
        return this.deck.cards[this.turnCount]
    }
    takeTurn(guess) {
        const currentCard = this.returnCurrentCard();
        let turn = new Turn(guess, currentCard);
        this.turnCount++;
        turn.evaluateGuess();
        if (turn.evaluateGuess()) {
            this.correctGuessIds.push(currentCard.id);
        }
        else if (!turn.evaluateGuess()) {
            this.incorrectGuessIds.push(currentCard.id);
        }
        return turn.giveFeedback();
    }
    calculatePercentageCorrect() {
        if(this.correctGuessIds.length === 0) {
            return '0%';
        }
        else {
        let fraction = ((this.correctGuessIds.length) / (this.turnCount));
        return `${(fraction * 100).toFixed(0)}%`;
        }
    }
    endRound() {
        let percentCorrect = this.calculatePercentageCorrect();
        return `**Round over!** You answered ${percentCorrect} of the questions correctly!`;
    }
}
module.exports = Round;