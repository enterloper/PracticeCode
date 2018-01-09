function ThreeSum(arr) { 
  for(let i=1, l=arr.length; i<l; i++) {
    for(let j=i+1; j<l; j++) {
      for(let k=j+1; k<l; k++){
        if(arr[i]+arr[j]+arr[k] === arr[0]) {
          return true;
        }
      }
    }
  }
  return false; 
}