function ExOh(str){
  str = str.toLowerCase();
  var xCount = 0;
  var oCount = 0;
  for(var i=0, y=str.length; i<y; i++){
    if(str[i]==='x'){
      xCount++;
    } else if(str[i]==='o'){
      oCount++;
    }
  }
  if(xCount===oCount){
    return 'true';
  } else {
    return 'false';
  }
}   