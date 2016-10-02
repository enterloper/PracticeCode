function ScaleBalancing(strArr) { 
  var scales = /[0-9]+/g[Symbol.match](strArr[0]).map(n => Number(n)), 
      weights = /[0-9]+/g[Symbol.match](strArr[1]).map(n => Number(n)).sort((a,b)=>{ return a<b?-1:a>b?1:0 }),
      scaleDiff = Math.max(scales[0],scales[1])-Math.min(scales[0],scales[1]),
      storage = [];
  //"get lucky" check.
  if(weights.indexOf(scaleDiff)!==-1) { return scaleDiff }
  // one-sided & two-sided iterative check
  for(let i=0, l=weights.length; i<l; i++) {
    for(let j=i+1; j<l; j++) {
      if(scaleDiff===(weights[i]+weights[j])){
        storage.push(weights[i], weights[j]);
        return storage.join(',');
      }
      if(Math.abs(weights[i]-weights[j])===scaleDiff) {
        storage.push(weights[i], weights[j]);
        return storage.join(',');
      }
    }
  }
  return 'not possible';
}

// ScaleBalancing(["[3, 4]", "[1, 2, 7, 7]"]); // '1'
// ScaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"]); // '3,6'
// ScaleBalancing(["[5, 9]", "[1, 2, 6, 7]"])// '6,2' === 11

