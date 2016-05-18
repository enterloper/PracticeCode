function ABCheck(str){
  let mod = str.split("");
  for(let i=0; i<mod.length; i++){
    if(mod[i]==='a' && mod[i+4]==='b'){
      return true;
    }
    if(mod[i]==='b' && mod[i+4]==='a'){
      return true;
    }
  }return false;
}
