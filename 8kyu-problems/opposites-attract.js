function loveFunc(flower1, flower2){
  //Logic to determine odd or even petals and compare
  if (flower1 % 2 == 0 && flower2 % 2 != 0){
    return true;
  } else if (flower1 % 2 != 0 && flower2 % 2 == 0){
    return true
  } else return false;
}

console.log(loveFunc(1,2)); //true
console.log(loveFunc(4,2)); //false
console.log(loveFunc(6,7)); //true