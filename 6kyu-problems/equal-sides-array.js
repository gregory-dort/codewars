function findEvenIndex(arr) {
  // checks if array is empty and returns -1 since there are no elements.
  if (arr.length === 0) return -1
  
  // main for loop to iterate through array
  for (let N = 0; N < arr.length; N++){
    // calculate left sum
    let leftSum = 0;
    for (let i = 0; i < N; i++){
      leftSum += arr[i];
    }
    
    // calculate right sum
    let rightSum = 0;
    for (let j = N + 1; j < arr.length; j++){
      rightSum += arr[j];
    }
    
    if (leftSum === rightSum){
      return N;
    }
  }
  
  return -1;
}