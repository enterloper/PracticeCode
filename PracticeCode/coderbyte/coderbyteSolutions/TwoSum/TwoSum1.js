function TwoSum(arr) { 
  let t = arr[0],
  output = [];
  for(let i=1; i<arr.length; i++) {
    let storage = [];
    for(let j=i+1; j<arr.length; j++) {
      if( (arr[i]+arr[j]) === t ) {
        storage.push(arr[i]);
        storage.push(arr[j]);
        output.push(storage)
        storage = [];
      }
    }
  }
  if( output.length === 0 ) { return -1 }
  return output.map(x=>x.join(',')).join(' ');
}

TwoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]) // => '6,11 10,7 15,2'
