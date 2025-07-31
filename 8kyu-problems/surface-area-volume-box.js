// Problem: Find the surface area and volume of a box based on three positive non-zero integers
// Level: 8kyu

function getSize(width, height, length) {
  var result = [];
  
  var calcArea = 2 * width * length + 2 * height * width + 2 * length * height;
  result.push(calcArea);
  var calcVolume = width * length * height;
  result.push(calcVolume);
  
  return result;
}
