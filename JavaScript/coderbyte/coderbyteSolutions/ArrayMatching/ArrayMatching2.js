function ArrayMatching(s) { 
  let first = s[0].length<s[1].length ? s[0].match(/\d+/g).map( x=> Number(x) ) : s[1].match(/\d+/g).map( x=> Number(x) ),
  second = s[0].length>s[1].length ? s[0].match(/\d+/g).map( x=> Number(x) ) : s[1].match(/\d+/g).map( x=> Number(x) ),
  max = Math.max(first.length, second.length),
  output = [];
  for(let i=0; i<max; i++) {
    (first[i] !== undefined && second[i] !== undefined) ? output.push(first[i]+second[i]) : output.push(second[i]);
  }
  return output.join("-");
}

ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]) // => "7-4-6-10-6"

ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]) // => "3-3-6-2"
