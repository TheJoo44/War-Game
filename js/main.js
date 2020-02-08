/*----------Constants-----------*/
const cardNums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const cardSuits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let player;
let computer;


/*----------App's State (Variables)-----------*/
let shuffledDeck;
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
const bgmBtn = document.querySelector('.bgm-toggle')
const sfxBtn = document.querySelector('.sfx-toggle')


/*----------Event Listeners--------------*/
playBtn.addEventListener('click', playCards);
replayBtn.addEventListener('click', replay);
bgmBtn.addEventListener('click', bgm);
sfxBtn.addEventListener('click', sfx);


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
    // deck is the name of the new array
    this.deck = []
  }
// Assigns card values to suits
  newDeck(cardNums, cardSuits) {
    // loops through cardSuits array
    for (let i = 0; i < cardSuits.length; i++) {
      // loops through cardNums array
      for (let it = 0; it < cardNums.length; it++){
        // pushes the num/suits of each new card to the deck array
        this.deck.push(new Card(cardNums[it], cardSuits[i]));
      }
    }
    return this.deck;
  }
}
// assigns the newly created deck array to the deck variable
let deck = new Deck()
// calls the function to create the newDeck inside the deck array
deck.newDeck(cardNums, cardSuits)

// Shuffles the cards of the new deck
// function shuffleDeck(array) {
//   let curIdx = deck.length, tempValue, rdmIdx;
  
//   while ( 0 !== curIdx) {
//   // picks the index of a random card in deck array
//   let rdmIdx = Math.floor(Math.random() * curIdx);
//   curIdx -= 1;

//   tempValue = deck[curIdx];
//   deck[curIdx] = deck[rdmIdx];
//   deck[rdmIdx] = tempValue
//   }
//   return shuffledDeck;
// }

// shuffleDeck();
// console.log(shuffledDeck);


// function dealCards() {

// }

// Play button function
function playCards() {
  console.log('Fight!')

  // compareCards()
  // roundWinner()
  // gameWinner()
}

// function compareCards() {

// }

// function rndWinner() {

// }

// function gmWinner() {

// }

// function render() {

// }

// Replay button function
function replay() {
  console.log('Rematch')
}

// Background music on/off
function bgm() {
  console.log('Music On/Off')
}

// SoundFX on/off
function sfx() {
  console.log('SFX On/Off')
}