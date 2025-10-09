function countPositivesSumNegatives(input) {
  // check if array is empty / null input
  if (input === null) return [];
  if (input.length == 0) return [];
  
  // initialize result, positive counter and negative sum variables
  let posCount = 0;
  let negSum = 0;
  let result = [];
  
  for (const num of input){
    if (num === 0){
      continue;
    }
    
    // checks if num is positive or negative and either adds to sum or updates counter
    if (num < 0) {
      negSum += num
    } else if (num > 0) {
      posCount++;
    }
  }
  
  result.push(posCount);
  result.push(negSum);
  return result;
}