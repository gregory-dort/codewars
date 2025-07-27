function firstToLast(str,c){
  var first = str.indexOf(c);
  var last = str.lastIndexOf(c);
  var gap = last - first;
  
  if(first == -1 || last == -1){
    return -1
  } else {
    return gap;
  }
}

// Set vars for first / last positions of c within the string then subtracted them from each other to find the gap
// If c is not found -1 is returned to show it is not present
// If there is one appearance of c 0 is returned