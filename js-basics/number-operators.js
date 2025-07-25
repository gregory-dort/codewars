function whatNumberIsIt(n){
  
  switch(true) {
      case isNaN(n):
        return "Input number is Number.NaN"
        break;
      case n === Number.MIN_VALUE:
        return "Input number is Number.MIN_VALUE"
        break;
      case n === Number.MAX_VALUE:
        return "Input number is Number.MAX_VALUE"
        break;
      case n === Number.NEGATIVE_INFINITY:
        return "Input number is Number.NEGATIVE_INFINITY"
        break;
      case n === Number.POSITIVE_INFINITY:
        return "Input number is Number.POSITIVE_INFINITY"
        break;
      default:
        return `Input number is ${n}`
  }
}

// Utilized switch true statement in order to specifically check for Number.isNaN as a regular switch statement would find the NaN value as false since it utilizes a strictly equal comparison automatically.
// This function checks the value inputted and compares it to the cases to see if it matches any of the special number values