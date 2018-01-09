function VowelCount(str){
  return str.split('').filter(function(x){
    if(/[aeiou]/i.test(x)){
      return x; 
    }
  }).length;
}