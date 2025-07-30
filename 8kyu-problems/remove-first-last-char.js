function removeChar(str){
  var endIndex = str.length - 1;
  
  //Check length of string input
  if(str.length <= 2){
    return '';
  } else {
    var result = str.slice(1, endIndex);
    return result;
  }
}

// Used slice operator to remove first and last character of string
// used if-else logic to check str.length before performing operation