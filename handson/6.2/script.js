//put all event listeners in the same place
//it is diffcult to track all event listeners if they are all over the place
window.addEventListener("DOMContentLoaded", async function () {
  //we can only call loadData when data.js is before chart.js for it to access it
  let series1 = await loadData();
  let series2 = await loadData2();
  console.log(series1);
  //since chart is a global variable, we can use it in this functions
  chart.updateSeries([
    {
      name: "data1",
      data: series1,
    },
  ]);

  secondChart.updateSeries([
    {
      name: "data2",
      data: series2,
    },
  ]);
});

const options = {
  chart: {
    type: "line",
    height: "100%",
    id: "firstChart",
    group: "lineChart",
  },

  series: [
    //no data
  ],
  // if there is no data, make below load first
  noData: {
    text: "Loading...",
  },
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

const optionsSecond = {
  chart: {
    type: "line",
    height: "100%",
    id: "secondChart",
    group: "lineChart",
  },

  series: [
    //no data
  ],
  // if there is no data, make below load first
  noData: {
    text: "Loading...",
  },
};

const secondChart = new ApexCharts(
  document.querySelector("#chart2"),
  optionsSecond
);
secondChart.render();
