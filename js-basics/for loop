function pickIt(arr){
  let odd = [], even = [];
  let len = arr.length;
  
  for(let i = 0; i < len; i++){
    if (arr[i] % 2 != 0){
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }
  
  return [odd,even];
}

//For loop to traverse an array and separate odd and even elements into their respective arrays.
//When pushing an element into an array from another array call the correct array name. Made the mistake of arr.push(odd[i]) instead of odd.push(arr[i]).