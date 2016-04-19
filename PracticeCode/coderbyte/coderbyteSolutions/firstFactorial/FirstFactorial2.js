function FirstFactorial(num) {
  if(num===0 || num===1){
    return 1;
  }
  var output = 1;
  for(var i=num; i>0; i--){
    output=output*i;
  }
}