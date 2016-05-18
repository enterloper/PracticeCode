function LetterCapitalize(str){
  let array = str.split(' ');
  
  function cap1(string){
    let string2 = string.slice(0,1).toUpperCase() + string.slice(1);
    return string2;
  }
  return array.map(function(x){
    return cap1(x);
  }).join(" ");
}
