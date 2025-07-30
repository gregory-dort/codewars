// Complete qestion using ternary operator
// If student is true, return ticket price is $8
// If false, return $12
// isStudent is a boolean value

function movieTicket(isStudent) {
    return isStudent ? "$8" : "$12";
}

console.log(movieTicket(true)); // Output: $8
console.log(movieTicket(false)); // Output: $12