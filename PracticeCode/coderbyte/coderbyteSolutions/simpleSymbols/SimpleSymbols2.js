function SimpleSymbols(str) { 
  var strBreak = str.split("")
  var re1 = /[a-z]/gi
  var letterCount = 0;
  var matchCount = 0;
  for(var i=0, len=str.length; i<len; i++){
    if(re1.test(str[i])){
      letterCount++;
      if(str[i-1]==="+"&&str[i+1]==="+"){
        matchCount++;
      }
    }
  }
  if(matchCount===letterCount){
    return true;
    } else {
    return false;
  }
}