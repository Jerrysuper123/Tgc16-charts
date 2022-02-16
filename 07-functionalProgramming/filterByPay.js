let jobs = [
  {
    name: "zookeeper",
    salary: 3000,
  },
  {
    name: "beekeeper",
    salary: 4000,
  },
  {
    name: "hawker",
    salary: 10000,
  },
];

//filter function
let shortListed = jobs.filter(function (job) {
  //reture true of false to put in the new array
  return job.salary >= 3000;
});

console.log(shortListed);

//compare function
let compare = function (el) {
  return el.salary >= 3000;
};

function customFilter(array, f) {
  let results = [];
  for (let el of array) {
    if (f(el)) {
      results.push(el);
    }
  }
  return results;
}

console.log("Custom filter=>", customFilter(jobs, compare));
