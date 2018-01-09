function LetterChanges(str){
  stringArray = str.toLowerCase().split('');

  function switchLetter(character){
    if(character === 'z'){
      return 'A';
    }else if(/[dhnt]/.exec(character)){
      return String.fromCharCode(character.charCodeAt(0)+1).toUpperCase(); 
    }
    else if(/[a-y]/.exec(character)){
      return String.fromCharCode(character.charCodeAt(0)+1);
    }
    else{
        return character;
    }
  }
  var modArray = stringArray.map(function(x){
    return switchLetter(x);
  });
  return modArray.join('');
}
