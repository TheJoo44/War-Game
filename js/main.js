/*----------Constants-----------*/
const cardNums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const cardSuits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let player;
let computer;
const battleSound = '/Users/jeremybirnbaum/code/projects/War-Game/audio/swordclash01.mp3';



/*----------App's State (Variables)-----------*/
let playerDeck = [];
let playerCard;
let playerScore;
let computerDeck = [];
let computerCard;
let computerScore;
let roundWinner;
let gameWinner;
let bgmPlay = false
let sfxPlay = false



/*---------Cached Elements--------------*/
// Player Elements
const pDeckEls = document.querySelector('.player-deck');
const pPlayedCard = document.querySelector('.player-card');
const pScore = document.querySelector('.player-score');

// Computer Elements
const cDeckEls = document.querySelector('.computer-deck');
const cPlayedCard = document.querySelector('.computer-card');
const cScore = document.querySelector('.computer-score');

// Round Elements
const rWinner = document.querySelector('.round-winner')
const decRWinner = document.querySelector('.declare-r-winner')
const playBtn = document.querySelector('.play-button')
const replayBtn = document.querySelector('.replay-button')
const winMsg = document.querySelector('.win-msg')

// Audio Elements
const bgmBtn = document.querySelector('.bgm-toggle')
const bkgdMusic = document.querySelector('#bkgd-music')
const sfxBtn = document.querySelector('.sfx-toggle')
const sfxPlayer = new Audio();

bkgdMusic.volume = .2;



/*----------Event Listeners--------------*/
playBtn.addEventListener('click', playCards);
replayBtn.addEventListener('click', replay);
bgmBtn.addEventListener('click', bgmOnOff);
sfxBtn.addEventListener('click', sfxOnOff);




/*----------Functions--------------*/

//  Combines cardNums and cardSuits arrays (WORKING)
class Card {
  constructor(cardNum, cardSuit) {
    this.cardNum = cardNum;
    this.cardSuit = cardSuit;
  }
}
// creates new card object
let card = new Card(cardNums, cardSuits)


// Makes a new deck (WORKING)
class Deck {
  constructor() {
    // deck is the name of the new array
    this.deck = [];
  }
  // Assigns card values to suits
  newDeck(cardNums, cardSuits) {
    // loops through cardSuits array
    for (let i = 0; i < cardSuits.length; i++) {
      // loops through cardNums array
      for (let it = 0; it < cardNums.length; it++){
        // pushes the num/suits of each new card to the deck array
        this.deck.push(new Card(cardNums[it], cardSuits[i]));
        // this.deck.push(`${cardNums[it]} of ${cardSuits[i]}`);
      }
    }
    return this.deck;
  }
}
// assigns the newly created deck array to the deck1 variable
let deck1 = new Deck();
// calls the function to create the newDeck inside the deck array
deck1.newDeck(cardNums, cardSuits);

// Defines the shuffledDeck array
let shuffledDeck1;

function init() {
  scores = {
    p: 0,
    c: 0
  }
  dealPlayerCards()
  dealComputerCards()
}

// defines shuffledDeck1 as the shuffleDeck() with deck1.deck as a parameter
shuffledDeck1 = shuffleDeck(deck1.deck)

// Shuffles the cards of the new deck(WORKING)
function shuffleDeck(array) {
  return array.sort(() => Math.random() - 0.5);
}
// console.log(shuffleDeck(deck1.deck));




// Deals 26 cards from the shuffledDeck1 array out to the playerDeck(WORKING)
function dealPlayerCards() {
  while (playerDeck.length < 26) {
    playerDeck.push(shuffledDeck1.pop())
  }
  return playerDeck;
}
dealPlayerCards()

// // Deals 26 cards from the shuffledDeck1 array out to the computerDeck(WORKING)
function dealComputerCards() {
  while (computerDeck.length < 26) {
  computerDeck.push(shuffledDeck1.pop())
  }
  return computerDeck;
}
dealComputerCards();



// plays player and computer card each round(WORKING)
function playPlayerCard() {
    playerCard = playerDeck.shift()

  return playerCard;
}
console.log(playerCard)

function playComputerCard() {
    computerCard = computerDeck.shift()
  
    return computerCard;
}
console.log(computerCard)




// compares the value of each card(WORKING)
function compareCards() {
  if (playerCard.cardNum === computerCard.cardNum) {
    console.log('equal')
    for (let i = 0; i < 4; i++) {
      playPlayerCard();
      playComputerCard();
    }
    compareCards();
  } else if (playerCard.cardNum > computerCard.cardNum) {
    console.log('player')
    playerScore++;
    decRWinner.innerText = 'Humans';
    // UPDATE SCORES LOGIC HERE
    // computerScore--;
  } else if (computerCard.cardNum > playerCard.cardNum){
    console.log('computer')
    computerScore++;
    decRWinner.innerText = 'Goblins';
    // playerScore--;
  }
}




// Show Win/lose Message(NOT TESTED)
function gmWinner() {
  if (player === winner) {
  winMsg.innerText('You Win');
  } else {
    winMsg.innerText('You Lose');
  }
}

// Play button function(Click-WORKING, Sounds-WORKING, Dealing-WORKING, Compare-WORKING)
function playCards() {
  playSounds();
  playPlayerCard();
  playComputerCard();
  compareCards();
  // gameWinner()
}

function render() {
  
}

// Replay button function
function replay() {
  console.log('Rematch')
  // init()
}

// Plays sound when battle button is clicked. Called in playCards()(WORKING)
function playSounds() {
  sfxPlayer.src = battleSound;
  sfxPlayer.play();
}

// Background music on/off(NOT WORKING: music won't autoplay, button click will start/stop music.)
function bgmOnOff() {
  console.log('Music On/Off');
  bgmPlay ? bkgdMusic.pause() : bkgdMusic.play();
  bgmPlay = !bgmPlay;
}


// SoundFX on/off
function sfxOnOff(name) {
  console.log('SFX On/Off');
  // sfxPlay ? battleSound.pause() : battleSound.play();
  // sfxPlay = !sfxPlay;
}