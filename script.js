// define the options

const options = {
  //chart setting
  chart: {
    type: "line",
    height: "100%",
  },

  series: [
    {
      name: "sightings",
      data: [10, 12, 22, 24, 35, 55, 78],
    },

    {
      name: "temparature",
      data: [22, 11, 33, 33, 33, 33, 90],
    },
  ],

  xaxis: {
    categories: ["Jan", "Feb", "Apr", "May", "Jun", "Jul", "Aug"],
  },
};

//create a new chart object
//first argu apexchart is the div where we had the chart
let divChart = document.querySelector("#chart");
const chart = new ApexCharts(divChart, options);

//render the chart
chart.render();
