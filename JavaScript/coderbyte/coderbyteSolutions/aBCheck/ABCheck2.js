function ABCheck(str){
  for(var i=0; i<str.length; i++){
    if(str.charAt(i)==="a" && str.charAt(i+4)==="b"){
      return "true";
    } else if(str.charAt(i)==="b" && str.charAt(i+4)==="a"){
      return "true";
    }
  } return "false";
}
