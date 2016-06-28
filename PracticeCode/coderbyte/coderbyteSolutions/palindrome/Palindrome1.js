function Palindrome(str){
  var newStr = str.toLowerCase().match(/[A-Za-z]/gi).join("");
  var modStr = str.toLowerCase().match(/[A-Za-z]/gi).reverse().join("");
  if(modStr === newStr){
    return 'true';
  } else{
    return 'false';
  }
}
