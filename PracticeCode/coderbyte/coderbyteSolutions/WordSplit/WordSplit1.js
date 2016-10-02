function WordSplit(s) { 
  var d = s[1].split(','), f = s[0], b = [], o = '';
  for(let i=0, j=f.length-1; i<f.length; i++, j--){
    for(let k=f.length-1; k>0; k--) {
      if(d.indexOf(f.substring(i, k)) !== -1) { b.push(f.substring(i, k)) }
    }
    if(d.indexOf(f.substring(f.length-j))!==-1) { b.push(f.substring(f.length-j)) }
  }
  b.forEach((x) => {
    b.forEach((y) => {
      if(x+y===f){ o=`${x},${y}` }
    })
  })
  return o.length > 0 ? o : 'not possible';
}
// WordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]) //"hello,cat"
// WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]) // "base,ball"
// WordSplit(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]) //"abcg,efd"