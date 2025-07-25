// For in and For of solution
function giveMeFive(obj){
  let arr = [];
  
  for(var key in obj){
    if(key.length == 5){
      arr.push(key);
    }
    
    var value = obj[key];
    if(value.length == 5){
      arr.push(value);
    }
  }
  return arr;
}

// Utilized for loop to iterate through keys in object
// Used if statements to check the length of the key itself and the value associated with it within one iteration
// This is efficient because it can check both the key and value in one pass through the object