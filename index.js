let count = 0;
const dealCards = document.getElementById("deal");
const shuffleCards = document.getElementById("shuffle");
const animation = document.getElementById("animation");
const video = document.createElement("video");
const start_game = document.getElementById("start_game");
const cardsNumber = document.getElementById("cardsNumber");
const text = document.getElementById("text");
let showCard;
class Card {
  constructor(suit, faceValue) {
    this.suit = suit;
    this.faceValue = faceValue;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.suits = ["hearts", "spades", "clubs", "diamonds"];
    this.faceValues = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];
    for (let suit of this.suits) {
      for (let faceValue of this.faceValues) {
        this.cards.push(new Card(suit, faceValue));
      }
    }
  }

  shuffle() {
    this.cards = [...this.cards];
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  dealCard() {
    if (this.cards.length === 0) {
      return null;
    }
    return this.cards.pop();
  }
}

const deck = new Deck();
deck.shuffle;

function dealCard() {
  const selecktedCard = deck.dealCard();
  text.innerHTML = "";
  count++;
  video.src = "back.mp4";
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 240;
  video.width = 320;
  animation.appendChild(video);

  if (count <= 52) {
    console.log(
      `Dealt card: ${selecktedCard.faceValue} of ${selecktedCard.suit}`
    );
    cardsNumber.innerHTML = `On the deck you have ${52 - count} cards`;
    showCard = setTimeout(() => {
      text.innerHTML = `Your Card is ${selecktedCard.faceValue} of ${selecktedCard.suit}`;
    }, 3000);
  } else {
    console.log("No card is dealt");
    text.innerHTML = "No card is dealt";
  }
}
function shuffleByClick() {
  cardsNumber.innerHTML = `On the deck you have ${52 - count} cards`;
  text.innerHTML = "";
  deck.shuffle();
  console.log(deck.cards);
  video.src = "shuffle.mp4";
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 240;
  video.width = 320;
  animation.appendChild(video);
}
start_game.addEventListener("click", () => {
  location.reload();
});
shuffleCards.addEventListener("click", shuffleByClick);
dealCards.addEventListener("click", dealCard);
