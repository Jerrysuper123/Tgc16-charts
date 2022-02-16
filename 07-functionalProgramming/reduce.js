//reduce is to sum all elements
let numbers = [1, 3, 5, 7]; //reduce the array to its sum

//reduce array to its aggregate (max, min, sum, medium) - only 1 number is returned
let reducer = function (current, total) {
  return current + total;
};

//using the reducer function starting from 0;
let sum = numbers.reduce(reducer, 0);
console.log(sum);

function customSumReducer(array, initialValue, f) {
  let total = initialValue;
  for (let current of array) {
    total = f(current, total);
  }
  return total;
}

console.log("customSumReducer = ", customSumReducer(numbers, 0, reducer));

let random = [1, 2, 3];
let maxReducer = function (current, largestSoFar) {
  if (current > largestSoFar) {
    return current;
  } else {
    return largestSoFar;
  }
};

let max = random.reduce(maxReducer, -1000);
console.log("max= ", max);

function customMaxReduce(array, initialValue, f) {
  let largestSoFar = initialValue;
  for (let el of array) {
    largestSoFar = f(el, largestSoFar);
  }

  return largestSoFar;
}

console.log("customMaxReduce = ", customMaxReduce(random, -1000, maxReducer));
