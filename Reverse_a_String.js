// [1]
function ReverseString (str) {
  let reverseString = [];
  let string = str.split("");

  for(let i=str.length-1; i>=0; i--) {
    reverseString.push(str[i]);
  }
  return reverseString.join("");
}

console.log(ReverseString("amira"));

// [2]
let ReverseString2 = str => str.split("").reverse().join("");
console.log(ReverseString2("amira"));