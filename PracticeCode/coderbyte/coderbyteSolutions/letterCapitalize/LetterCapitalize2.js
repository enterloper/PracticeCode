function LetterCapitalize(str){
  //create arrays for modded string;
  var strArr = str.split(' ');
  var modStrArr = [];
  //funciton to modify each element in array to import into new array
  function capFirst(element, index, array){
    modStrArr.push(element.replace(/^\w/gi, element.charAt(0).toUpperCase()));
  }
  //forEach for each element in strArr
  strArr.forEach(capFirst);
  //return result
  return modStrArr.join(" ");
}