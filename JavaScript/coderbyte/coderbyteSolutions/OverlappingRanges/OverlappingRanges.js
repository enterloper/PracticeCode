function OverlappingRanges(arr) { 
  var first=[],second=[], count = 0, max = 0;
  for(let i=arr[0], j=arr[2]; i<=arr[1]; i++,j++){
    if(i<=arr[1]){ first.push(i) }
    if(j<=arr[3]){ second.push(j) }
  }
  max = Math.max(first.length,second.length);
  for(let k=0; k<max; k++){
    for(let l=0; l<second.length; l++) {
      if(first[k]===second[l]){ count++ }
    }
  }
  return count>=arr[4]?true:false;
}

// OverlappingRanges([5,11,1,5,1])
// OverlappingRanges([1,2,1,3,1])
//OverlappingRanges([1,10,9,10,1])
//OverlappingRanges([4,10,5,8,2]) 