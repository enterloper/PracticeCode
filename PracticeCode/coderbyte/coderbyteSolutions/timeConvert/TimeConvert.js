function TimeConvert(num){
  var minute = num%60;
  var hour = Math.floor(num/60);
  return hour+":"+minute;
}
   