function litres(time) {
  let result = Math.floor(time * 0.5);
  return result;
}

console.log(litres(20)); // 10
console.log(litres(2)); // 1
console.log(litres(0)); // 0