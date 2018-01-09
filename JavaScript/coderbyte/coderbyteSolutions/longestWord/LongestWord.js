function LongestWord(sen){
  const split = sen.split(" ");
  var longest = "";
  for(var i=0; i<split.length; i++){
    if(split[i].length>longest.length){
      longest = split[i];
    }
  }return longest;
}