(function fib(n){
  let a = [0,1];
  for(let i=2; i<n; i++){
    a.push(a[a.length-2]+a[a.length-1]);
  }
  return a;
}(10));