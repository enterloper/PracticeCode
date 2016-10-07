Note:  The following exercises provide an opportunity to demonstrate design and programming skills.  It is unlikely there will be sufficient time to complete all tasks.  Feel free to advance to subsequent sections once you feel you have sufficiently demonstrated your skills in a particular section.  You may revisit partially-completed sections later if there is time.


PART 1:  Implement a library in JavaScript Only representing a deck of playing cards.  A regular deck of cards consists of four suits (hearts, clubs, diamonds, spades) and 13 cards in each suit (Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King) for a total of 52 cards (ignore the jokers).  The following can be done with a deck of cards:

* You should be able to open a Javascript console and create multiple instances of cards, and decks outside of any ui.

* Shuffle:  Randomizes the order of the cards.

* Cut:  Splits the deck at a point chosen by the player; cards above the split point are placed on the bottom of the deck (without reordering). The first card below the split becomes the top of the deck.  The first card above the split becomes the bottom of the deck.

* Deal:  Retrieves the top card and removes it from the deck.

* New Order:  Places the remaining cards in the deck in the order of a new deck of cards (top to bottom:  hearts A-K, clubs A-K, diamonds A-K, spades A-K).


PART 2: Wire the library from part 1 to the provided UI. Inside the js folder you will see a main.js file that is already included into the the index.html page. Also included in the index.html is the latest jQuery library. Feel free to add any additional libraries that you are comfortable with to achieve this task. This should work on Firefox or Chrome, you don't have to worry about IE. The UI has two cards already shown to demonstrate the ui components. The gray card on the left is the "deck" side and the cards should be face down. The card on the right is the "discard" side and the cards should be be face up. 

* The discard side only needs to display the last discarded card.

* There are a series of buttons on the left side that should be implemented as follows:
  - Shuffle: should reset the deck, remove all cards from the discard pile and back into the deck and should shuffle the deck
  - Cut: Should get the input from the user to provide a number where the cards should be cut
  - Deal: Should remove the first card off the deck and place it face up into the discard side
  - Sort Remaining: Should sort the remaining cards in the deck
  
* When the user clicks on the deck it should deal a card to the discard pile

* All interactions with the deck that change the size of the deck should update the "# left in deck" with the number of cards left

* When there are no cards left in the deck there should be no card visible on the deck side of the board

* When there is no card that has been dealt there should be no card on the discard side.

* When the user changes the type of deck from standard to pinochle it should reset the deck and shuffle it


PART 3:  A pinochle deck may be formed by combining two normal decks of cards and removing cards 2-8, for a total of 48 cards.  In addition, pinochle uses unconventional card ordering, namely (from lowest to highest):  9, Jack, Queen, King, 10, Ace.


