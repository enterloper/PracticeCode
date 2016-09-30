"use strict";
function ThreeSum(arr, t = false) {
  arr.slice(1,arr.length-1).forEach(function(x) {
    arr.slice(2).forEach(function(y) {
      arr.slice(3).forEach(function(z) {
        if((x+y+z) === arr[0]) { t = true; }
      });
    });
  });
  return t;
}