// alert("hello");

const options = {
  chart: {
    type: "line",
    height: "100%",
  },
  series: [
    {
      name: "Deal Closed",
      data: [3000, 3200, 41000, 1500, 2000, 3000, 7000],
    },

    {
      name: "Deal rejected",
      data: [3000, 3200, 4100, 2500, 2000, 3000, 3000],
    },
  ],

  xaxis: {
    categories: [1999, 2000, 2001, 2002, 2003, 2004, 2005],
  },
};

const lineChart = new ApexCharts(document.querySelector("#chart"), options);
lineChart.render();
