function howManySmaller(arr,n){
  var count = 0;
  
  for(var i = 0; i < arr.length; i++){
    console.log("This is n: " + n);
    var a = arr[i].toFixed(2);
    var b = parseFloat(a);
    
    if(b < n) { 
      count++;
      console.log(count);
    };
  }
  return count;
}

// howManySmaller uses a for loop to iterate through an array of decimal numbers then checks if array element is smaller then n, if it is it adds to the count. Once array is done being iterated it returns the total count.
// Lesson learned: adding count variable outside of loop so that it does not reset to 0 every time breaking the loop
