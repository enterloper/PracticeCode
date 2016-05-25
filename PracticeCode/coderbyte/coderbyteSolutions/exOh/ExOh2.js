function ExOh(str){
  function splitter(letter){
    return str.toLowerCase().split('').sort(function(a,b){ return a>b ? 1: a<b ? -1 : 0;}).filter(function(x){if(x===letter){return true;}});
  }
  return splitter('o').length===splitter('x').length;
}