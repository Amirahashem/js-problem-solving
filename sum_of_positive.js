// you get an array of numbers, return the sum of all positive numbers in the array
// return 0 if there are no numbers

function sumOfPositive(...numbers) {
  let result = 0;
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
      result += numbers[i];
    }
  }
  return result;
}

console.log(sumOfPositive(10, -5, 20, -30, 15)); // 45
console.log(sumOfPositive(-10, -20, -30)); // 0
console.log(sumOfPositive()); // 0