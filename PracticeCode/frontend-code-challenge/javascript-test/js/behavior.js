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

    cut: function (deck,number) {
      if(number<=0){ return "E1"; }
      if(number>=deck.length){ return "E2"; }
      if(deck.length<1){ return "E3"; }

      let clone=Array.prototype.slice.call(arguments[0]),
          output = clone.splice(number);
      
      clone.forEach( x=>{ output.push(x) } );
      return output;
    },

    sortDeck: function (a) {
  
      const sorted = (x) => {
        let suit = x[0][1];
        let ordered = x.filter( y => {
          if(!/['A','J','Q','K']/.test(y[0])) { return y }
        }).sort((a,b) => { return parseInt(a)<parseInt(b) ? -1 : parseInt(a)>parseInt(b) ? 1 : 0  });
        
        let suitcase = x.filter( w => {
          if(/['A','J','Q','K']/.test(w[0])) { return w }
        }).sort((a,b) => { 
          return storage[a[0]]<storage[b[0]] ? -1 : storage[a[0]]>storage[b[0]] ? 1 : 0 });
        
        suitcase.forEach(x=>{
          if(x[0]==='A'){ ordered.unshift(x) }
          else(ordered.push(x))
        })
        return ordered;
      };
      
      var clone = Array.prototype.slice.call(a), output = [];
      
      var storage = {
        "A":1,
        "J":2,
        "Q":3,
        "K":4,
        hearts:[],
        clubs: [],
        diamonds: [],
        spades: []
      };
      
      for(let i=0, l=clone.length; i<l; i++){
        let temp = clone[i];
        if(temp[temp.length-1]==="♥") { storage.hearts.push(clone[i]) }
        if(temp[temp.length-1]==="♣") { storage.clubs.push(clone[i]) }
        if(temp[temp.length-1]==="♦") { storage.diamonds.push(clone[i]) }
        if(temp[temp.length-1]==="♠") { storage.spades.push(clone[i]) }
      }
      for(let key in storage) {
        if(Array.isArray(storage[key])) {
          storage[key] = sorted(storage[key])
          output.push(...storage[key])
        }
      }
      return output;
    }
  };

  let NewDeck = Object.create(Deck);

  NewDeck.drawOne = function (deck) {
    var pile = deck || this.deck;
    return pile.pop();
  };

  let cardDeck = {
    Deck: Deck,
    NewDeck: NewDeck
  };
  return cardDeck;
}());
