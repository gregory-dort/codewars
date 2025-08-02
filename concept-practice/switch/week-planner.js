// Create function planForDay which takes parameter dayNumber and returns a tring with an activity for the day
// Must use a switch statement

function planForDay(dayNumber) {
    switch(dayNumber){
        case 0:
        case 6:
            return "Enjoy the weekend!";
        case 1:
            return "Start the week stroong with work.";
        case 2:
            return "Attend team meeting.";
        case 3:
            return "Mid-week check in.";
        case 4:
            return "Prepare for Friday.";
        case 5:
            return "Wrap up tasks and relax!";
        default:
            return "Unknown day."
    }
}

console.log(planForDay(6)); // Output: Enjoy the weekend!
console.log(planForDay(3)); // Output: Mid-week check in.
console.log(planForDay(7)); // Output: Unknown day.