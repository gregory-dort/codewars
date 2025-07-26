function colorOf(r,g,b) {
  
  var red = r.toString(16);
  var green = g.toString(16);
  var blue = b.toString(16);
  
  if(red.length === 1){ red = "0" + red };
  if(green.length === 1){ green = "0" + green };
  if(blue.length === 1){ blue = "0" + blue };
  
  var webCode = `#${red + green + blue}`;
  return webCode;
}
