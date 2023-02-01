class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.currentCard = this.deck[0];
    }
}
module.exports = Round;