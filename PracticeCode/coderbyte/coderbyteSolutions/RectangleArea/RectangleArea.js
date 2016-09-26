function RectangleArea(s) { 
  /* sanitize strings */
  let mod = s.map((x) => x.substring(1, x.length-1).split(' ').map(y => Number(y)) ).sort(),
      w = mod[2][0]-mod[0][0],
      h = mod[3][1]-mod[0][1];
      console.log(mod)
  return h*w; 
}

RectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"]) // Output:4
RectangleArea(["(0 0)","(1 0)","(1 1)","(0 1)"]) // Output:1
RectangleArea(["(0 0)", "(3 0)", "(0 2)", "(3 2)"]) // Output:6
RectangleArea(["(-1 -1)","(0 0)","(-1 0)","(0 -1)"]) // Output:1
RectangleArea(["(-2 -2)","(0 0)","(-2 0)","(0 -2)"]) // Output:4
RectangleArea(["(3 3)","(0 0)","(3 0)","(0 3)"]) // Output:9
RectangleArea(["(0 0)","(8 8)","(0 8)","(8 0)"]) // Output:64
RectangleArea(["(0 0)","(5 0)","(0 3)","(5 3)"]) // Output:15
RectangleArea(["(1 1)","(4 4)","(1 4)","(4 1)"]) // Output:9