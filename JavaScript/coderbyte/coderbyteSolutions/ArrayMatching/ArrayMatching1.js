function ArrayMatching(s) { 
  let first = s[0].match(/\d+/g).map( x=> Number(x) ),
  second = s[1].match(/\d+/g).map( x=> Number(x) ),
  max = Math.max(first.length, second.length),
  output = [];
  for(let i=0; i<max; i++) {
    if(first[i] !== undefined && second[i] !== undefined) {
      output.push(first[i]+second[i])
    } else if(first[i] === undefined) {
      output.push(second[i])
    } else if(second[i] === undefined) {
      output.push(first[i])
    }
  }
  return output.join("-");
}

ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]) // => "7-4-6-10-6"

ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]) // => "3-3-6-2"
