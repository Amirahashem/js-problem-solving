// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//   if(number % 2 === 0) {
//     return "Even Number";
//   }else {
//     return "Odd Number";
//   }
// };

function evenOrOdd(number) {
  return number % 2 == 0 ? "Even Number" : "Odd Number";
}


console.log(evenOrOdd(10));
console.log(evenOrOdd(9));