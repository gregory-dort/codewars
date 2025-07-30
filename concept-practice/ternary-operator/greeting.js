// Complete using ternary operator
// Website needs different display message based on login status
// If user logged in, return "Welcome!"
// if user not logged in, return "Please log in."
// parameter isLoggedIn is a boolean value

function getGreeting(isLoggedIn) {
    return isLoggedIn ? "Welcome!" : "Please log in.";
}

console.log(getGreeting(false));
console.log(getGreeting(true));