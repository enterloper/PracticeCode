function LetterChanges(str){
  stringArray = str.toLowerCase().split('');

  function switchLetter(character){
    if(character === 'z'){
      return 'A';
    }else if(/[dhnt]/.exec(character)){
      return String.fromCharCode(character.charCodeAt(0)+1).toUpperCase(); 
    }
    else{
      return String.fromCharCode(character.charCodeAt(0)+1);
    }
  }
  var modArray = stringArray.map(function(x){
    return switchLetter(x);
  });
  return modArray.join('');
}
