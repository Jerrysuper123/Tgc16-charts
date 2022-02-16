//put all event listeners in the same place
//it is diffcult to track all event listeners if they are all over the place
window.addEventListener("DOMContentLoaded", async function () {
  //we can only call loadData when data.js is before chart.js for it to access it
  let rawData = await loadData();
  // console.log(series);
  let series = transformData(rawData);
  //since chart is a global variable, we can use it in this functions
  chart.updateSeries([
    {
      name: "Sales",
      data: series,
    },
  ]);
  //   not working here
});

const options = {
  chart: {
    type: "line",
    height: "100%",
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
