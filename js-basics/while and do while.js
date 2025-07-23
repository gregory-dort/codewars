function padIt(str,n){
  var i = 0;
  pad = "*";
  
  do {
    i++;
    
    if (i % 2 != 0){
      str = pad + str;
      console.log(str);
    } else {
      str = str + pad;
      console.log(str);
    }
  } while (i < n);
  return str;
}

// Function which pads a string with asterisks
// do while which has a function to pad on the left and right based on the value of i (odd adds to left, even adds to right)