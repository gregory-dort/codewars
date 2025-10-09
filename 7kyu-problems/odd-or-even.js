function oddOrEven(array) {
  // checks for enmpty array and treats it as 0
  if (array.length === 0) return "even"
  
  // initialize sum accumulator
  let sum = 0;
  
  // iterates through array and adds elemenst to sum
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  
  // determines if sum of array elements is odd or even and returns correct string
  if (sum % 2 == 0){
    return "even"
  } else if (sum % 2 !== 0) {
    return "odd"
  }
}