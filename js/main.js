/*----------Constants-----------*/
const cardNums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const cardSuits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const cards = [];
let player;
let computer;


/*----------App's State (Variables)-----------*/
let shuffledCards = [];
let playerDeck = [];
let playCard;
let playerScore;
let computerDeck = [];
let compCard;
let computerScore;
let roundWinner;
let gameWinner;


/*---------Cached Elements--------------*/
// Player Elements
const pDeckEls = document.querySelector('.player-deck');
const pPlayedCards = document.querySelector('.player-card');
const pScore = document.querySelector('.player-score');

// Computer Elements
const cDeckEls = document.querySelector('.computer-deck');
const cPlayedCards = document.querySelector('.computer-card');
const cScore = document.querySelector('.computer-score');

// Round Elements
const rWinner = document.querySelector('.round-winner')
const playBtn = document.querySelector('.play-button')
const replayBtn = document.querySelector('.replay-button')

// Audio Elements
const bgmBtn = document.querySelector('bgm-toggle')
const sfxBtn = document.querySelector('sfx-toggle')


/*----------Event Listeners--------------*/
// playBtn.addEventListener('click', play);
// replayBtn.addEventListener('click', replay);
// bgmBtn.addEventListener('click', bgmOnOff);
// sfxBtn.addEventListener('click', sfxOnOff);


/*----------Functions--------------*/


function init() {
  scores = {
    p: 0,
    c: 0
  }

}

//  Combines cardNums and cardSuits arrays
class Card {
  constructor(cardNum, cardSuit) {
    this.cardNum = cardNum;
    this.cardSuit = cardSuit;
  }
}
// creates new card object
// let card = new Card(cardNums, cardSuits)
// console.log(card)

// Makes a new deck
class Deck {
  constructor() {
    this.deck = []
  }
// Assigns card values to suits
  newDeck(cardNums, cardSuits) {
    // loops through cardSuits array
    for (let i = 0; i < cardSuits.length; i++) {

      // loops through cardNums array
      for (let i = 0; i < cardNums.length; i++){
        // pushes the num/suits of each new card to the deck array
        this.deck.push(new Card(cardNums[i], cardSuits[i]));
      }
    }
    return this.deck;
  }
}

let deck = new Deck()
deck.newDeck(cardNums, cardSuits)
console.log(deck)


function suffleCards() {

  
}

function dealCards() {

}

function playCards() {


  compareCards()
  roundWinner()
  gameWinner()
}

function compareCards() {

}

function rndWinner() {

}

function gmWinner() {

}

function render() {

}


function replayButton() {

}
