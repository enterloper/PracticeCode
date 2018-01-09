function NonrepeatingCharacter(str) { 
  let a = Array.prototype.slice.call(...arguments)
  return a.filter( x=>{ return a.indexOf(x) === a.lastIndexOf(x)?true:false } )[0]
}

NonrepeatingCharacter('hello world hi hey') // => 'w'
   