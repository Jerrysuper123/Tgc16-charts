// define the options

const options = {
  //chart setting
  //left handside is always a string
  chart: {
    type: "bar",
    height: "100%",
  },

  series: [
    {
      name: "revenue",
      data: [12002, 12230, 23232, 232434, 35, 4455, 44478],
    },
  ],

  xaxis: {
    // categories are the labels
    categories: ["Jan", "Feb", "Apr", "May", "Jun", "Jul", "Aug"],
  },
};

//create a new chart object
//first argu apexchart is the div where we had the chart
let divChart = document.querySelector("#chart");
//new ApexCharts return an object, in which has many properties and functionalities
const chart = new ApexCharts(divChart, options);

//render the chart
chart.render();
