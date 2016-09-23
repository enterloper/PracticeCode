(function recurseFib(c, a) {
  if(c===2) {
    return a;
  }
  a.push(a[a.length-2]+a[a.length-1])
  return recurseFib(c-1, a);
}(10,[0,1]));