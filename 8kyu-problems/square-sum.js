function squareSum(numbers){
  //test to see if array is empty
  if (numbers.length < 1) return 0;
  
  //initialize accumulator
  let sum = 0;
  
  //for loop for array traversal and accumulator update
  for (let i = 0; i < numbers.length; i++){
    let square = numbers[i] * numbers[i];
    sum += square;
  }
  return sum;
}

console.log(squareSum([1,2,2])); //9
console.log(squareSum([])); //0
console.log(squareSum([-1,-2])); //5