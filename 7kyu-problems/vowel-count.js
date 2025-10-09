function getCount(str) {
  // initialize count variable and vowel array
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (const char of str){
    if (vowels.includes(char)){
      count++;
    } else continue;
  }
  return count;
}