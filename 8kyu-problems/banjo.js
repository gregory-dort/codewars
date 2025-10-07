function areYouPlayingBanjo(name) {
  if (name[0] === 'r' || name[0] === 'R'){
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}

console.log(areYouPlayingBanjo('Romeo')); // Output: Romeo plays banjo
console.log(areYouPlayingBanjo('Tim')); // Output: Tim does not play banjo
console.log(areYouPlayingBanjo('John')); // Output: John does not play banjo