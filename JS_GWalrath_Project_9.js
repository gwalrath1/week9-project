class Card {
    constructor(suit, rank, value) { 
      this.suit = suit;
      this.rank = rank;
      this.value = value;
      this.name = `${this.rank} of ${this.suit}`;
    }
}

class Deck  {
  constructor() {
    this.deck = [];
  }

  createDeck() {
    let suits = ["Hearts ♥", "Spades ♠", "Clubs ♣", "Diamonds ♦"]; // not using the "this" keyword because these variables are tied to the method itself, not the class. 
    let rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 

    for (let i = 0; i < suits.length; i++) { // combines 3 properties into one object (a card)
      for(let j = 0; j < rank.length; j++) { // rank and value are the same length (and mean the same thing), so there's no need to make another for loop for the length of values
          
        this.deck.push(new Card(suits[i], rank[j], value[j]));
      } 
    }
  }

  shuffleDeck() { 
    // the below code is the fisher yates method to randomizing an array
    for (let i = this.deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // j is our randomization of index i
        // Swap arr[i] with the element 
        // at random index 
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; 
    } 
  }
}

class Player { 
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }
}


class Game { 
  constructor() {
    
  }

  playGame() {
    console.log(`Starting game...it's WAR!`);
    console.log(`
                    `);
    let player1 = new Player("Gabby"); // players
    let player2 = new Player("Ally");


    let deck = new Deck; // deck
    deck.createDeck();
    deck.shuffleDeck();


    console.log(`Player 1 name: ${player1.name}`); // player's names displayed
    console.log(`Player 2 name: ${player2.name}`);

    // DEALS CARDS // 
    player1.hand = deck.deck.slice(0,26);
    player2.hand = deck.deck.slice(26,52);
    
    console.log(`
                    `);
    for (let i = 0; i < 26; i++) {
      console.log("Round " + (i + 1));
      console.log(`${player1.name}'s card: ${player1.hand[i].name}`); // displays card for each round
      console.log(`${player2.name}'s card: ${player2.hand[i].name}`);

      // compares cards values to see who get's a point. total score's are displayed:
      // if player 1's card is higher
      if (player1.hand[i].value > player2.hand[i].value) { 
        player1.score += 1; // adds points to p1's overall score
        console.log(`${player1.name} earned a point!`);
        console.log(`${player1.name}'s current score: ${player1.score}`);
        console.log(`${player2.name}'s current score: ${player2.score}`);
        console.log(`
                    `);

      // if player 2's card is higher
      } else if (player1.hand[i].value < player2.hand[i].value) {
        player2.score += 1; // adds points to p2's overall score
        console.log(`${player2.name} earned a point!`);
        console.log(`${player1.name}'s current score: ${player1.score}`);
        console.log(`${player2.name}'s current score: ${player2.score}`);
        console.log(`
                    `);
      } 

      // if there's a tie
      else {
        console.log(`Tie. No points awarded this round.`);
        console.log(`${player1.name}'s current score: ${player1.score}`);
        console.log(`${player2.name}'s current score: ${player2.score}`);
        console.log(`
                    `);
      }
    }
    
    // displays total scores for each player
    console.log(`${player1.name}'s total score: ${player1.score}`); 
    console.log(`${player2.name}'s total score: ${player2.score}`);
    
    // compares score to determine if there is a winner or if it's a tie.
    if (player1.score > player2.score) {
            console.log("--------------------------------------------------")
            console.log(`${player1.name} wins the game!`);
        } else if (player1.score < player2.score) {
            console.log("--------------------------------------------------")
            console.log(`${player2.name} wins the game!`);
        } else {
            console.log("--------------------------------------------------")
            console.log("Tie. No winner.");
        }

}

}

let game = new Game;
game.playGame(); // new game object using the playGame method





