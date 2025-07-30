// Complete using if-else chain
// If package weight is 5 kilograms or less, shipping is $5
// If package is between 5 and 10 kilograms, shipping is $10
// If package is more than 10 kilograms, shipping is $15

function calculateShippingCost(weight) {
    if(weight <= 5){
        return "$5";
    } else if(weight <= 10){
        return "$10";
    } else {
        return "$15";
    }
}

console.log(calculateShippingCost(4)); // Output: $5
console.log(calculateShippingCost(9)); // Output: $10
console.log(calculateShippingCost(20)); // Output: $15