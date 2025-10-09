function invert(array) {
  let result = [];
  
  for (let i = 0; i < array.length; i++){
    let reverse = array[i] * -1
    result.push(reverse);
  }
  return result;
}