/*----------Constants-----------*/
const cardNums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const cardSuits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let player;
let computer;
const battleSound = "../War-Game/audio/swordclash01.mp3";

let warTemp = [];
let isWar;
let isGoing = true;

/*----------App's State (Variables)-----------*/
let playerDeck = [];
let playerCard;
let playerScore = 0;
let computerDeck = [];
let computerCard;
let computerScore = 0;
let roundWinner;
let gameWinner;
let bgmPlay = false;
let sfxPlay = false;

/*---------Cached Elements--------------*/
// Player Elements
const pDeckEls = document.querySelector(".player-deck");
// const pDeckEls = document.querySelector(".player-deck-angel");
// const pDeckEls = document.querySelector(".player-deck-elf");
const pPlayedCard = document.querySelector(".player-card");
const pScore = document.querySelector(".p-score");

// Computer Elements
const cDeckEls = document.querySelector(".computer-deck");
// const cDeckEls = document.querySelector(".computer-deck-demon");
// const cDeckEls = document.querySelector(".computer-deck-orc");
const cPlayedCard = document.querySelector(".computer-card");
const cScore = document.querySelector(".c-score");

// Round Elements
const rWinner = document.querySelector(".round-winner");
const decRWinner = document.querySelector(".declare-r-winner");
const playBtn = document.querySelector(".play-button");
const replayBtn = document.querySelector(".replay-button");
const humGob = document.querySelector("#hg");
const angDem = document.querySelector("#ad");
const elfOrc = document.querySelector("#eo");
const winMsg = document.querySelector(".winLose");
const bodyBackground = document.querySelector("#body-background");

// Audio Elements
// const bgmBtn = document.querySelector(".bgm-toggle");
// const bkgdMusic = document.querySelector("#bkgd-music");
// const sfxBtn = document.querySelector(".sfx-toggle");
// const sfxPlayer = new Audio();

// bkgdMusic.volume = 0.2;

const cardFace = document.createElement("img");

/*----------Event Listeners--------------*/
playBtn.addEventListener("click", playCards);
replayBtn.addEventListener("click", replay);
humGob.addEventListener("click", humGobDeck)
angDem.addEventListener("click", angDemDeck)
elfOrc.addEventListener("click", elfOrcDeck)
// bgmBtn.addEventListener("click", bgmOnOff);
// sfxBtn.addEventListener('click', autoPlay);

/*----------Functions--------------*/

//  Combines cardNums and cardSuits arrays (WORKING)
class Card {
  constructor(cardNum, cardSuit, cardClass) {
    this.cardNum = cardNum;
    this.cardSuit = cardSuit;
    this.cardClass = cardClass;
  }
}
// creates new card object
let card = new Card(cardNums, cardSuits);

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
      for (let it = 0; it < cardNums.length; it++) {
        // console.log(cardNums[it], cardSuits[i])
        const suit = cardSuits[i][0].toLowerCase();
        let name = "";
        if (cardNums[it] === 14) {
          name = "A";
        } else if (cardNums[it] === 13) {
          name = "K";
        } else if (cardNums[it] === 12) {
          name = "Q";
        } else if (cardNums[it] === 11) {
          name = "J";
        } else if (cardNums[it] < 10) {
          name = "0" + cardNums[it];
        } else {
          name = "10";
        }
        const cClass = suit + name;
        // pushes the num/suits of each new card to the deck array
        this.deck.push(new Card(cardNums[it], cardSuits[i], cClass));
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

// defines shuffledDeck1 as the shuffleDeck() with deck1.deck as a parameter
shuffledDeck1 = shuffleDeck(deck1.deck);

// Shuffles the cards of the new deck(WORKING)
function shuffleDeck(array) {
  return array.sort(() => Math.random() - 0.5);
}
// console.log(shuffleDeck(deck1.deck));

// Deals 26 cards from the shuffledDeck1 array out to the playerDeck(WORKING)
function dealPlayerCards() {
  while (playerDeck.length < 26) {
    playerDeck.push(shuffledDeck1.pop());
  }
  return playerDeck;
}
dealPlayerCards();

// // Deals 26 cards from the shuffledDeck1 array out to the computerDeck(WORKING)
function dealComputerCards() {
  while (computerDeck.length < 26) {
    computerDeck.push(shuffledDeck1.pop());
  }
  return computerDeck;
}
dealComputerCards();

// plays player and computer card each round(WORKING)
function playPlayerCard(isWar) {
  playerCard = playerDeck.shift();
  pPlayedCard.setAttribute("class", `player-card card ${playerCard.cardClass}`);
  if (isWar) {
    warTemp.push(playerCard);
  }
  return playerCard;
}

function playComputerCard(isWar) {
  computerCard = computerDeck.shift();
  cPlayedCard.setAttribute(
    "class",
    `computer-card card ${computerCard.cardClass}`
  );
  if (isWar) {
    warTemp.push(computerCard);
  }
  return computerCard;
}

// compares the value of each card(WORKING) Cycles through decks once
function compareCards() {
  if (playerDeck.length === 0 || playerScore > 13 || computerScore > 13) {
    gmWinner()
  } else if (playerCard.cardNum === computerCard.cardNum) {
    console.log('War')
    for (let i = 0; i < 4; i++) {
      if (playerDeck.length === 0) {
        console.log("War Computer Win")
        gmWinner();
      } else if (computerDeck.length === 0) {
        console.log("War Player Win")
        gmWinner();
      } else {
        playPlayerCard(true);
        playComputerCard(true);
      }
    }

    compareCards();
  } else if (playerCard.cardNum > computerCard.cardNum) {
    console.log('player')
    playerScore++;
    decRWinner.innerText = 'Player';
    pScore.innerText = playerScore;
  } else if (computerCard.cardNum > playerCard.cardNum) {
    console.log('computer')
    computerScore++;
    decRWinner.innerText = 'Computer';
    cScore.innerText = computerScore;
  }
}

// Show Win/lose Message(WORKING) Change this logic when switching to longer game style(playerDeck.length === 0)
function gmWinner() {
  if (playerScore > computerScore) {
    winMsg.textContent = "You Win";
    winMsg.style.backgroundColor = "var(--btn-color)";
    winMsg.style.border = "4px groove black";
    return (isGoing = false);
  } else if (computerScore > playerScore) {
    winMsg.textContent = "You Lose";
    winMsg.style.backgroundColor = "var(--card-border)";
    winMsg.style.border = "4px groove black";
    return (isGoing = false);
  } else if (playerScore === computerScore) {
    winMsg.textContent = "Stalemate";
    winMsg.style.backgroundColor = "var(--btn-color)";
    winMsg.style.border = "4px groove black";
    return (isGoing = false);
  }
}

// Play button function(Click-WORKING, Sounds-WORKING, Dealing-WORKING, Compare-WORKING)
function playCards() {
  // playSounds();
  playPlayerCard();
  playComputerCard();
  compareCards();
}


// Replay button function
function replay() {
  location.reload(true);
}

// Plays sound when battle button is clicked. Called in playCards()(WORKING)
// function playSounds() {
//   sfxPlayer.src = battleSound;
//   sfxPlayer.play();
// }

// Background music on/off, click to start bgm(WORKING)
// function bgmOnOff() {
//   console.log("Music On/Off");
//   bgmPlay ? bkgdMusic.pause() : bkgdMusic.play();
//   bgmPlay = !bgmPlay;
// }

function autoPlay() {
  while (playerDeck.length > 0 && computerDeck.length > 0) {
    playBtn.click()
  }
}

function humGobDeck() {
  pDeckEls.style.backgroundImage = "url('css/imgs/humdeck2.jpg')";
  cDeckEls.style.backgroundImage = "url('css/imgs/gobdeck.jpg')";
  bodyBackground.style.backgroundImage = "url('css/imgs/battlefield3.jpg')";
}

function angDemDeck() {
  pDeckEls.style.backgroundImage = "url('css/imgs/angeldeck.jpg')";
  cDeckEls.style.backgroundImage = "url('css/imgs/demondeck.jpg')";
  bodyBackground.style.backgroundImage = "url('css/imgs/angdem1.jpg')";
}

function elfOrcDeck() {
  pDeckEls.style.backgroundImage = "url('css/imgs/elfdeck.jpg')";
  cDeckEls.style.backgroundImage = "url('css/imgs/orcdeck.jpg')";
  bodyBackground.style.backgroundImage = "url('css/imgs/elforc1.jpg')";
}