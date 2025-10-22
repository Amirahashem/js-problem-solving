// you get an array of numbers, return the sum of all positive numbers in the array
// return 0 if there are no numbers

function sumOfPositive(arr) {
    let initialValue = 0;
    return arr.filter(function (num) {
        if(num > 0) {
            return num;
        }
    }).reduce(function(acc, current) {
        return acc + current;
    },initialValue)
}

console.log(sumOfPositive([1, -4, 7, 12])); // 20
console.log(sumOfPositive([-1, -4, -7, -12])); // 0
