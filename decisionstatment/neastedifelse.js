// if condition1 true then execute block of code

let num = 10;
 if(num>0){
    console.log("the number is positive");
  
    // if condition1 and condition2 true then execute block of code
  if(num%2 === 0){
    console.log("the number is even");
  }  
// when condition1 true and condition2 false then code executed
  else{
    console.log("the number is odd");
  }
 }
// when condition1 false then code executed
 else{
    console.log("the number is not positive")
 }
