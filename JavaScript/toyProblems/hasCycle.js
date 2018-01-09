var hasCycle = function(linkedList) {
  var tortoise = linkedList;
  var hare = linkedList;
  
  while (tortoise) {
    if (hare === null || hare.next === null) {
      return false;
    }
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (hare === null || tortoise === null) {
      return false;
    }
    if (tortoise.value === hare.value) {
      return true;
    }
  }
  return false;
}