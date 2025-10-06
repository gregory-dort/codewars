function timeConvert(num) {
  // Checks for zero or negative number
  if (num <= 0){
    return "00:00"
  }
  
  // Calculate Hours and convert it to string
  let hours = Math.floor(num / 60).toString().padStart(2, "0");
  
  // Calculate Minutes and convert it to string
  let minutes = (num % 60).toString().padStart(2, "0");
  
  // Adds hours and minutes into hh:mm format for the time
  let result = hours + ':' + minutes;
  return result;
}

// Test Cases
console.log(timeConvert(0)); // Output: 00:00
console.log(timeConvert(389)); // Output: 06:29