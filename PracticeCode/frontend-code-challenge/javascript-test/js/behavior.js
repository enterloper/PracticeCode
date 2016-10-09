"use strict";
var publicAPI = (function() {
  var Deck = {
    cardType: function(cardType = 'standard') {
     this.cardType = cardType;
     return this.cardType;
    },
    orderDeck: function (suits = [ '♥', '♣', '♠', '♦' ], values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ]) {
      let deck = []
      suits.forEach(function(suit) {
        values.forEach(function(value) {
          deck.push(value + suit);
        });
      });
      return deck;  
    },
    shuffleDeck: function (providedDeck) {
      let deck = providedDeck || this.orderDeck();
        let key, temp;
        for(let i = 0; i<2; i++) {
          for (let j = 0, l=deck.length; j<l; j++) {
              key = Math.floor(Math.random() * deck.length);
              temp = deck[j];
              deck[j] = deck[key];
            deck[key] = temp;
          }
        }
     return deck;
    },
    cut: function (deck,number){
      if(number<=0){
        return "E1";
      }
      if(number>=deck.length){
        return "E2";
      }
      if(deck.length<1){
        return "E3";
      }

      let clone=Array.prototype.slice.call(arguments[0]),
          output = clone.splice(number);
      
      clone.forEach( x=>{ output.push(x) } );
      return output;
    }
  };

  var NewDeck = Object.create(Deck);
  NewDeck.drawOne = function (deck) {
    var pile = deck || this.deck;
    return pile.pop();
  };
  var cardDeck = {
    Deck: Deck,
    NewDeck: NewDeck
  };
  return cardDeck;
}());
