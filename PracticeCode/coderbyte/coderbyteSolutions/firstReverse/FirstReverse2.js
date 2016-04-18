function FirstReverse(str) {

  var strArray = [];
  var revArray = [];
  var output = "";
  for(var i=0; i<str.length; i++){
    strArray.push(str[i]);
  }
  for(var j=i-1; j>=0; j--){
    revArray.push(str[j]);
  }
  console.log(revArray);
  for(var k=0; k<revArray.length; k++){
    output = output + revArray[k];
  }
  return output
}
