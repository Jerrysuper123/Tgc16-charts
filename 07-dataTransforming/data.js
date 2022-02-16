async function loadData() {
  const response = await axios.get(
    "https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json"
  );
  return response.data;
}

//input is raw data to transform
//output is a serix, x is the name of the month, y is the total revenue of the month
function transformData(rawData) {
  //1. use map to keep the information that we want
  let transformed = rawData.map(function (transaction) {
    return {
      amount: transaction.payment.amount,
      date: new Date(transaction.completed_at), // convert data string to date object
      //date object we can access year, month etc
    };
  });

  //filter out those data with year 2020
  let filtered = transformed.filter(function (transaction) {
    return transaction.date.getFullYear() == 2020;
  });

  // console.log("filter out year 2000 data", filterd);

  //we only want months for x axis, return month = 1, 3, 4
  let withMonth = filtered.map(function (transaction) {
    return {
      amount: transaction.amount,
      month: transaction.date.getMonth(),
    };
  });
  // console.log()

  //grouping
  // final result = {0: [t1,t2,t3], 1: [t3,t4,t5] }
  let groups = {};
  for (let m = 0; m < 12; m++) {
    groups[m] = []; //create one array for each month
  }

  for (let transaction of withMonth) {
    let monthMumber = transaction.month;
    groups[monthMumber].push(transaction);
  }

  // return withMonth;
  console.log("groups =", groups);

  //understand more about this
  let series = [];
  //why reduce function is like this
  let reducer = function (total, currentTransaction) {
    return total + currentTransaction.amount;
  };
  //{0:[{amount: 23, month:0},{amount: 24, month:0}],1:[{...}]}
  //[{x:0, y:23+24},{}]
  for (let eachMonth in groups) {
    let coordinate = {
      //x is the key of
      x: eachMonth,
      /*[{amount: 23, month:0},{amount: 24, month:0}].reduce(
        function(ac, cr){
          return ac + cr.amount
        }
      */
      y: groups[eachMonth].reduce(reducer, 0),
    };
    series.push(coordinate);
  }

  console.log("Series =", series);
  return series;
}
