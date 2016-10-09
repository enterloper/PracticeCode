var standard = Object.create(publicAPI.NewDeck);
standard.deck = standard.orderDeck()
standard.shuffleDeck(standard.deck)
var standard1 = Object.create(publicAPI.NewDeck);
standard1.deck = standard.orderDeck()
standard1.shuffleDeck(standard1.deck)
// console.log(standard.deck)
// console.log(standard1.deck)