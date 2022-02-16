let words = ["apple", "seaborn", "durians"];

//map return a new array
let wordLength = words.map(function (el) {
  return el.length;
});

console.log(wordLength);
console.log(words);

function myCustomMap(data, f) {
  let results = [];
  for (let d of data) {
    results.push(f(d));
  }
  return results;
}

let count3 = myCustomMap(words, function (el) {
  return el.length;
});

console.log(count3);
