function fiveLine(s){
  let element = s.trim();
  let result = '';
  
  for(let i = 0; i < 5; i++){
    let repeatString = element.repeat(i + 1);
    result += repeatString;
    
    if(i < 4){
      result += "\n"
    } else break;
  }
  return result;
}

// trim removs whitespace from the beginning and end of a string
// used trim to remove whitespace from initial value then create  aloop which creates  new lines using repeat methos to repeat the string 5 times.