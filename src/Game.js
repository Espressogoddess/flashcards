const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');
const Card = require('./Card')

class Game {
  constructor(questionData) {
    this.currentRound;
    const cards = questionData.map(question => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer)
    });
    this.deck = new Deck(cards);
  }

  start() {
    this.currentRound = new Round(this.deck);
    return this.printMessage();
  }

  printMessage() {
    return `Welcome to FlashCards! You are playing with ${this.deck.countCards()} cards.
    -----------------------------------------------------------------------`;
  }

  printQuestion() {
      util.main(this.currentRound);
  }
}

module.exports = Game;
