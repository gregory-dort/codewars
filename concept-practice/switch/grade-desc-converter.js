// Create a function which takes a grade letter and returns a corresponding phrase
// Must use a switch statement

function getGradeDescription(gradeLetter){
    switch(gradeLetter){
        case 'A':
            return "Excellent work!";
        case 'B':
            return "Good job!";
        case 'C':
            return "Satisfactory performance.";
        case 'D':
            return "Needs improvement.";
        case 'F':
            return "Failed.";
        default:
            return "Invalid Input."
    }
}

console.log(getGradeDescription('A')); // Output: Excellent work!
console.log(getGradeDescription('F')); // Output: Failed.
console.log(getGradeDescription('X')); // Output: Invalid Input.