function HammingDistance(strArr) { 
  let count = 0,
  d = strArr.map( x=>{ return x.split('') } );
  for(let i=0; i<d[0].length; i++) {
    if(d[0][i] !== d[1][i]){
      count++
    }
  }
  return count;
}

HammingDistance(["helloworld", "worldhello"]) // => 8