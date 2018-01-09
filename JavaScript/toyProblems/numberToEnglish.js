function numberToEnglish(number) {
    /*****HELPER OBJECTS*****/
  var numbersToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  
  var numbersToPlace = {
    10: 'ten',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion',
  };
  /********reverse the number********/
  var digit = number.toString().split('').reverse().join("");
 console.log(digit)
  if(number === 0){
      return numbersToWords[number];
  }
  
  /*****HELPER FUNCTIONS*****/
  
  function babyMaker(value){
	var numberArray = value.toString().split("");
	var cradle = [];
	var longTime = Math.ceil(numberArray.length/3);
	for(var b = 0; b<longTime; b++){
		cradle.push(numberArray.splice(0,3));
	}return cradle;
  }
  var newbasket = babyMaker(digit);
  console.log(newbasket);

  
  function hatTrick(number){
      number = number.toString().split("").reverse();
      var numWords = "";
      for(var i=0; i<numWords.length; i++){
          if(number.length === 3 && i===0){
              numWords +=  number[2] + " "+ numbersToPlace[100];
        } if(i===1){
            numWords += numbersToWords[number[1]*numbersToWords];
      }
  }  
 }
}
numberToEnglish(23523752923);