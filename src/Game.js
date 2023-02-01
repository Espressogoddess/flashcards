const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');
const Card = require('./Card')

class Game {
  constructor() {
  }

  start() {
    // Creates Cards
    const cards = prototypeQuestions.map(question => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer)
    });
    const deck = new Deck(cards);
    console.log(deck)
    // Puts Cards in a Deck
    // Creates a new Round using the Deck
    this.currentRound = new Round();
    // invokes printMessage to display the message in the CLI
    // invokes printQuestion to kick off our helper functions that allow interaction via the CLI
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  createCards() {
   
    let deck = new Deck(cards);
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
