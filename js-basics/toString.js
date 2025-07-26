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

// Created if logic to add an extra value to converted strings if length was not 2
// JS simplifies string conversion to the minimal number of characters needed