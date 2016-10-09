var standard = Object.create(publicAPI.NewDeck);
standard.deck = standard.orderDeck();
standard.shuffleDeck(standard.deck);
var count = standard.deck.length;
console.log('---->first',standard.deck, count)
$(function() {
  $('.leftInDeck').text(count);
});

$("#shuffleButton").click(function() {
  standard.shuffleDeck(standard.deck)
  console.log('Hey no cheating!---->',standard.deck)
})

$("#cutButton").click(function() {
  $('numSelect').removeClass('show')
})