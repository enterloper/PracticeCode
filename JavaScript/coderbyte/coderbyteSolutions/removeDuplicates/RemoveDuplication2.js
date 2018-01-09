var arr = [1,2,2,3,4,5,3,4,4,5];

//Alternate varient not using indexOf approach.

const removedupe2 = (a) => {
  //organize values in sorted fashion and establish temp
  var clone = a.sort(),
      temp = a[0];
  for(let i=1; i<a.length; i++) {
    if(temp === a[i]) {
      //remove duplicate
      a.splice(i,1)
      //reset temp focus to maintain state
      temp = a[i-1];
      //reset i variable
      i--;
    } else {
      //advance temp to next iterable
      temp = a[i];
    }
  }
  return a;
};

removedupe2(arr)  // --> [1,2,3,4,5]
