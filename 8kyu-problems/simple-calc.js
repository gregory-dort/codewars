function calculator(a,b,sign){
  // function to detect if input is an integer
  if(Number.isInteger(a) === false || Number.isInteger(b) === false){
    return "unknown value";
  }
  
  if(sign === "+") {
    return a + b;
  } else if(sign === "-") {
    return a - b;
  } else if(sign === "*") {
    return a * b;
  } else if(sign === "/") {
    return a / b;
  } else {
    return "unknown value";
  }
}

// Function perform the 4 basic math operations
// First if statement prevents non-integer values
// If-else chain performs operation based on sign and returns unknown value if a sign does not match any cases

//Test cases
console.log(calculator(7, 8, "*")); // Output: 56
console.log(calculator(10, 5, "-")); // Output: 5
console.log(calculator(2, 5, "x")); // Output: unknown value
console.log(calculator(10, 2, "/")); // Output: 5
console.log(calculator(3, 4, "+")); // Output: 7