const barChartOptions = {
  chart: {
    type: "bar",
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

const barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();
