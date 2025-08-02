function sumMul(n,m){
  if(n <= 0 || m <= 0){return "INVALID"}
  var mult = [];
  var sum = 0;

  
  for(var i = n; i < m; i += n){
    mult.push(i);
  }
  return mult.reduce((accumulator, currentValue) => accumulator + currentValue);
}