function grabDoll(dolls){
  var bag=[];
  
  for(var i = 0; i < dolls.length; i++) {

    if(dolls[i] == "Barbie doll"){
        bag.push(dolls[i]);
        console.log(bag);
      } else if(dolls[i] == "Hello Kitty"){
        bag.push(dolls[i])
        console.log(bag);
      } else {
        continue;
      }
    
    if(bag.length < 3){
      continue;
    } else {
      break;
    }
  }
  return bag;
}

// My brute force solution of adding hello kitty / barbie doll elements into bag array
// Can simplify using other operators to compare the elements within the bag array to make it more effiecient