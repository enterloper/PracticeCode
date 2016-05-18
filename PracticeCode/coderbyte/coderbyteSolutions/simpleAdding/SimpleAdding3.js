function SimpleAdding(n){
  var total = 0;
  if(n<=0){
    return total;
  }
  else{
    total+= n+SimpleAdding(n-1);
  }
  return total;
}
