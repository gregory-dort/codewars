function howManydays(month){
  var days;
  switch (month){
      case 2:
        days = 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      default:
        days = 31;
  }
  return days;
}

// Switch statement which returns number of days in a month based on month number inputted
// Multiple cases in succession since they share the same code block (case 4, 6, 9, 11)