function betterThanAverage(classPoints, yourPoints) {
  // initialize accumulator
  let classSum = 0;
  
  // iterates through array and adds up entire class points
  for (let i = 0; i < classPoints.length; i++){
    classSum += classPoints[i]
  }
  
  // Calculate class average
  let classAvg = classSum / classPoints.length;
  
  
  // Compare class average to points and return result
  return (classAvg < yourPoints) ? true : false;
}

console.log(betterThanAverage([2, 3], 5)); // true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)); // true