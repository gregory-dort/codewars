function alienLanguage(str){
  let words = str.split(" ");
  let upper = [];
  
  for(var word of words){
    let n = word.length;
    let sol = word.slice(0, n - 1).toUpperCase() + word.slice(n-1).toLowerCase();
    upper.push(sol);
    console.log(upper);
  }
  let result = upper.join(" ");
  return result;
}

// Had to figure out method chaining concept in order to manipulate string inputs
// Function takes a string and makes all letters except for last character uppercaase and returns the result
// Chained slice and toUpperCase / toLowerCase methods to achieve result