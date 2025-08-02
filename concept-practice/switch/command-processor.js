// Create a function which processees commands and returns a corresponding message
// Must use a switch statement

function processCommand(command){
    switch(command){
        case 'start':
            return "Aplication starting...";
        case 'stop':
            return "Application stopping...";
        case 'pause':
            return "Application paused.";
        case 'resume':
            return "Application resuming...";
        case 'status':
            return "Checking Appplication status...";
        default:
            return "Unknown command.";
    }
}

console.log(processCommand('start')); // Output: Application starting...
console.log(processCommand('status')); // Output: Checking Application status...
console.log(processCommand('exit')); // Output: Unknown command.