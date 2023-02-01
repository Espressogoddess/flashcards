const Turn = require('./Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turnCount = 0;
        this.currentCard = this.deck[this.turnCount];
        this.incorrectGuessIds = [];
        this.correctGuessIds = [];
    }
    returnCurrentCard() {
        return this.currentCard;
    }
    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard);
        this.turnCount++;
        turn.evaluateGuess();
        if (turn.evaluateGuess()) {
            this.correctGuessIds.push(this.currentCard.id);
        }
        else if (!turn.evaluateGuess()) {
            this.incorrectGuessIds.push(this.currentCard.id);
        }
        this.currentCard = this.deck[this.turnCount]
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