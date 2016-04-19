function LongestWord(sen){
  //create variable for holding longest word
  //create array for words in sen parameter
  var longest = "";
  var wordArray = sen.match(/[A-Z0-9]+/gi);
  //create callback for forEach
  function checkLength(word, index, array){
    if(word.length>longest.length){
      longest=word;
    }
  }
  //use forEach to check each word in wordArray
  wordArray.forEach(checkLength);
  return longest;
}