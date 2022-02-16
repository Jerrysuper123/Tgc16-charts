const options = {
  chart: {
    type: "line",
    height: "100%",
    group: "campaign-reach-compare", //must have the same group name to be grouped together
    id: "campaign", //this is just id for campaign
  },
  title: {
    text: "campaign",
  },
  series: [
    {
      name: "campaigns",
      data: campaigns,
    },
  ],
  xaxis: {
    categories: categories,
  },
};

const lineChart = new ApexCharts(document.querySelector("#chart"), options);

lineChart.render();

//syncronized chart
// //you can only synchroniz the same type of chart
const reachChartOptions = {
  chart: {
    type: "line",
    height: "100%",
    group: "campaign-reach-compare",
    id: "reach",
  },
  title: {
    text: "reach",
  },
  series: [
    {
      name: "reach",
      data: reach,
    },
  ],
  xaxis: {
    categories: categories,
  },
};

const reachChart = new ApexCharts(
  document.querySelector("#reachChart"),
  reachChartOptions
);

reachChart.render();

// const reachChartOptions = {
//   chart: {
//     type: "line",
//     height: "100%",
//     id: "reach",
//     group: "campaign-reach-compare",
//   },
//   series: [
//     {
//       name: "reach",
//       data: reach,
//     },
//   ],
//   xaxis: {
//     categories: categories,
//   },
//   yaxis: {
//     labels: {
//       minWidth: 40,
//     },
//   },
//   title: {
//     text: "Reach",
//   },
// };
// const reachChart = new ApexCharts(
//   document.querySelector("#reachChart"),
//   reachChartOptions
// );
// reachChart.render();
