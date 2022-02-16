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

//return the array of job names, with salary more than 3k
//filter and map together,
// let shortListed = jobs.filter(function (job) {
//   return job.salary >= 3000;
// });
// let transformed = shortListed.map(function (el) {
//   return el.name;
// });

//chaining together
let final = jobs
  .filter(function (job) {
    return job.salary >= 3000;
  })
  .map(function (job) {
    return job.name;
  });
console.log(final);
