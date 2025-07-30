// Complete using if-else chain
// Employee bonus based on years of service to company
// If employee has 1 year or less, bonus is $100
// if employee has between 1 and 5 years, bonus is $500
// If employee has more than 5 yars, bonus is $1000
// yearsOfService is a number

function calculateBonus(yearsOfService) {
    if(yearsOfService <= 1){
        return "$100";
    } else if(yearsOfService <= 5){
        return "$500";
    } else {
        return "$1000";
    }
}

console.log(calculateBonus(0)); // Output: $100
console.log(calculateBonus(3)); // Output: $500
console.log(calculateBonus(15)); // Output: $1000