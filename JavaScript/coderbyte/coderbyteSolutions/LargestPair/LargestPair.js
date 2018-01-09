function LargestPair(num) { 
  var s = num.toString(), max = Number(s[0]+s[1]);
  for(let i=1; i<s.length; i++) {
      if(Number(s[i]+s[i+1])>max) { max = (Number(s[i]+s[i+1])) }
  }
  return max;
}
   
LargestPair(453857)
// Output:85

LargestPair(363223311)
// Output:63