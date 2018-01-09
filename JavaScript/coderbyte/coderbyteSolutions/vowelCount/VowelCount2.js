function VowelCount(str) {
  if(str.match(/[aeiou]/gi) === null){
    return 0;
  }else{
    return str.match(/[aeiou]/gi).length;
  }
}