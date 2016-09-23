var arr = [1,2,2,3,4,5,3,4,4,5];

/* Non-destructive format using ES6 spread operator */

function removedupe1(a) {
  //create clone so not to destroy original data
  var clone = Array.prototype.slice.call(...arguments);
  for(let i=0; i<clone.length; i++) {
    //check location of first and last index to find multiple iterations
    if( clone.indexOf(clone[i]) !== clone.lastIndexOf(clone[i]) ) {
      //remove duplicate
      clone.splice(i,1);
      //reset i variable
      i--;
    }
  } return clone;
}

removedupe1(arr) // --> [1,2,3,4,5]
