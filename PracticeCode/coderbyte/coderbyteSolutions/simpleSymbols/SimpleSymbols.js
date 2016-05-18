function SimpleSymbols(str){
  let arr = str.split('');
  for(let i=0; i<arr.length; i++){
    if(/[a-z]/.test(arr[i])){
      if(arr[i-1]!=='+'||arr[i+1]!=='+'){
        return false;
      }
    }
  }return true;
}
