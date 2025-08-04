function divisibleBy(numbers, divisor){
  let result = [];
  
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % divisor == 0){
      result.push(numbers[i])
    } else continue;
  }
  return result;
}

// Created an algorithm to check if a number in an array is divisble by a given divisor.