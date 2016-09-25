function ChangingSequence(arr) { 
  function up(a){ return arr[a]-arr[a-1]>0?true:false}
  var location, seq = up(1)
  for(var i=1; i<arr.length; i++){
    if(up(i) !== seq ){ return i-1 }
  }
  return -1;
} 

ChangingSequence([5, 4, 3, 2, 6, 4]) // => 3
