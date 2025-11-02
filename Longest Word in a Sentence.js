
// [1]
// function longestWord(sentence) {
//   let words = sentence.split(" ");
//   for(let i=0; i<words.length; i++){
//     if(words[i].length > words[i+1].length) {
//       return words[i];
//     }else {
//       return words[i+1];
//     }
//   }
// }

// console.log(longestWord("Welcome i am Amira"));

// [2]
function longestWord(sentence) {
  let lw = sentence.split(" ").reduce(function (acc, current) {
    return current.length > acc.length ? current : acc;
  });

  return lw;
}
console.log(longestWord("Welcome i am Amira"));