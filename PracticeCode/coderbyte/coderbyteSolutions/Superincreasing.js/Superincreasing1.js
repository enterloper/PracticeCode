function Superincreasing(arr) { 
  var focus = 0, sum = 0;
  for(let i=0; i<arr.length; i++) {
    sum=sum+arr[i];
    focus = arr[i+1];
    if(focus<=sum) {
      return false;
    }
  }
  return true; 
}

Superincreasing([1,2,5,10]) // => true