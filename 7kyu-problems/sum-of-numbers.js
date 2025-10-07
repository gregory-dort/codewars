function getSum(a, b){
  // initialize sum, start and end variables
  let start = 0;
  let end = 0;
  let sum = 0;
  
  // compares a to b to see if they are equal
  if (a == b) return a;
  
  // compares a to b to determine which is smaller
  if (a < b) {
    start = a;
    end = b;
  } else {
    start = b;
    end = a;
  }
  
  // iterates between start and end numbers and sums them
  for (let i = start; i <= end; i++){
    sum += i;
  }
  return sum;
}

//uses if/else blocks to determine which number is smaller
//for loop iterates through the numbers between start and end to find the sum

console.log(getSum(0,9)); // 45
console.log(getSum(1, 1)); // 1
console.log(getSum(1, 2)); // 3