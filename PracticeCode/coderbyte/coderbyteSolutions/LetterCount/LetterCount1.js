function LetterCount(s) { 
  //helper function for iteration through each word
  function helper(w) {
    var count = 1;
    for(let i=0, l=w.length; i<l; i++) {
      for(let j=i+1; j<l; j++) {
        if(w[i]===w[j]) { count++ }
        if(count>compare) { big = w }
        if(compare<count) { compare = count}
      }
      count=1;
    }
    return; 
  }
  //globals for comparison and output return
  var a = s.split(' '), big = '', compare = 1;
  for(let i=0, l=a.length; i<l; i++) { helper(a[i]) }
  //return requested output
    return big.length>1?big:-1; 
}

LetterCount("Hello apple pie") // => 'Hello'
LetterCount("No words") // => '-1'

