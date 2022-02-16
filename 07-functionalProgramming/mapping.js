console.log("hello");

let results = [
  {
    location: {
      lat: 1.03,
      lng: 130.12,
    },
    details: {
      name: "bk eating house",
      address: "CCK road",
    },
  },
  {
    location: {
      lat: 1.04,
      lng: 130.18,
    },
    details: {
      name: "BB eating house",
      address: "Bukit batok road",
    },
  },
  {
    location: {
      lat: 1.02,
      lng: 130.2,
    },
    details: {
      name: "China town",
      address: "China town road",
    },
  },
];

//for loop is iterative solution
let coordinates = [];
for (let r of results) {
  let coordinate = [r.location.lat, r.location.lng];
  coordinates.push(coordinate);
}

console.log(coordinates);

//take 2 using map function
let coordinates2 = results.map(function (r) {
  return [r.location.lat, r.location.lng];
});

console.log(coordinates2);
