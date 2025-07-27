function cutIt(arr){
  var result = [];
  var cut = ""
  var shortest = 255;
  
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length < shortest) {
      shortest = arr[i].length;
      }
    }
  
  for(var j = 0; j < arr.length; j++) {
      if(arr[j].length <= shortest) {
        cut = arr[j];
        result.push(cut);
      } else {
        cut = arr[j].slice(0, shortest);
        result.push(cut);
      }
  }
  return result;
}

// This function iterates through an array of strings and compares their lengths to find teh shortest possible string length.
// It slices all strings in the array to that length
// Utilizzed 2 for loops to find the shortest length first then cut the strings to the proper length
// the result is then pushed to a result array which returns the final results for the array