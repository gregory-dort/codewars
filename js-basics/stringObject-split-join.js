function splitAndMerge(string, separator) {
  var words = string.split(" ");
  var psr = [];
  
  for (var word of words) {
    var c = word.split("").join(separator);
    psr.push(c);
  }
  var result = psr.join(" ");
  return result;
}

// function which splits a string into words, then splits words in chars and joins them with a separator
// Challenges: understanding how to use split and join effectively
// used for loop to iterate through eachword and split the characters / joined them with a separator before returning final result