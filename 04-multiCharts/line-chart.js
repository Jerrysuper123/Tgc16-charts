//all variables in js file is in global scope
//so use const so that we wont reuse the variable
const lineChartOptions = {
  chart: {
    type: "line",
    height: "100%",
  },
  series: [
    {
      name: "sightings",
      data: sightings,
    },
    {
      name: "temperatures",
      data: temperatures,
    },
  ],
  xaxis: {
    categories: ["jan", "feb", "mar", "apr"],
  },
};

const lineChart = new ApexCharts(
  document.querySelector("#line-chart"),
  lineChartOptions
);

lineChart.render();
