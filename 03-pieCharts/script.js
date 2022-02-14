let options = {
  chart: {
    type: "pie",
    height: "100%",
  },

  // for pie chart, each element rep 1 slice of the data
  series: [12, 12, 33, 5, 6],
  labels: ["English", "Math", "chinese", "PE", "History"],

  //customize the color of the chart
  //you can give more colors pallet just in case
  //if exceed the color types, will rotate
  colors: ["#386641", "#6A994E", "#A7C957", "#F2E8CF", "#BC4749"],
};

let divElement = document.querySelector("#chart");
const chart = new ApexCharts(divElement, options);
chart.render();
