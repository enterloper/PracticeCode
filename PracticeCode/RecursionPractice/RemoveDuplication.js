var arr = [1,2,2,3,4,5,3,4,4,5];

/* Recursive approach */

function removedupe3(a, count = 0) {
  //base case
  if(count >= a.length){
    return a;
  }
  if( a.indexOf(a[count]) !== a.lastIndexOf(a[count]) ) {
     a.splice(count,1);
     count--;
  }
  //recursive action with proper tail call
  return removedupe3(a,count+1);
}

removedupe3(arr); // --> [1,2,3,4,5]