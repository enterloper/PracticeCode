var standard = Object.create(publicAPI.NewDeck);
standard.deck = standard.orderDeck()
standard.shuffleDeck(standard.deck)