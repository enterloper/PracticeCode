function ThreeNumbers(str) {
  const help = (x) => {
    let storage = [], clone = x.split('');
    for(let i=0, l=clone.length; i<l; i++) {
      if(/[0-9]/.test(clone[i]) && clone.indexOf(clone[i])===clone.lastIndexOf(clone[i])) {
        if(!/[0-9]/.test(x[i+1]) || !/[0-9]/.test(x[i-1])){
          storage.push(clone[i]);
        }
      }
    }
  return storage.length === 3;
  }
  var output = str.split(' ').map(x => help(x));
  return output.every(x => x)
}