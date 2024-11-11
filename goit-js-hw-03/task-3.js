let filterArray = function (numbers, value) {
  let resultsArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      resultsArray.push(numbers[i]);
    }
  }
  return resultsArray;
};

//var2
/*let filterArray = function (numbers, value) {
    let arrToRemove = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= value) {
            arrToRemove.push(numbers[i]);
        }
    }
    return numbers.filter(item => !arrToRemove.includes(item));
} */

//var3  FILTER
//let filterArray = function (numbers, value) {
// return numbers.filter((item) => item > value);
//};

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
