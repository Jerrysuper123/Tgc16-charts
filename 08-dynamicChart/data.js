async function loadData() {
  let response = await axios.get(
    "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/bigger-sales.json"
  );

  return response.data;
}

function transformData(rawData, country, year = "2017") {
  //fitering
  let filterFunc = function (record) {
    //user might enter empty string
    if (!country) {
      //keep all records
      return true;
    } else if (country === record.billing_address.country) {
      //keep records that matches
      return true;
    }
    //one liner
    // return !country || country == record.billing_address.country;
  };

  let filtered = rawData.filter(filterFunc);

  //filter by year
  let fitleredByYearFunc = function (record) {
    let dateObj = new Date(record.completed_at);
    if (!year) {
      return true;
    } else if (year === dateObj.getFullYear().toString()) {
      return true;
    }
  };

  let filteredByYear = filtered.filter(fitleredByYearFunc);

  //[{..},{...}]
  //[{amount: 2000 ,month: 7}, {amount: 7116, month: 10}]

  // let earnings = filteredByYear.map(function (record) {
  //   let dateObj = new Date(record.completed_at);
  //   return {
  //     amount: record.payment.amount,
  //     month: dateObj.getMonth(),
  //   };
  // });

  let earningsByMonthArray = filteredByYear.map(function (record) {
    let month = new Date(record.completed_at).getMonth();
    return {
      amount: record.payment.amount,
      month: month,
    };
  });

  //0: {amount: 14886, month: 7}
  //summary the total amount in array [totalAmount month1, total month]
  //group them together in an obj
  //{1 month: total amount, 2month: total amount }
  //push the amount in the the array by month
  //0: {amount: 14886, month: 7}
  //[[14886, 7116], [7116,9554]]

  let groups = [];
  for (let el of earningsByMonthArray) {
    if (groups[el.month] === undefined) {
      groups[el.month] = [];
    }
    groups[el.month].push(el.amount);
  }

  let reducer = function (total, current) {
    return total + current;
  };

  // {x: month, y: total amount}
  let objSummary = [];
  for (let i = 1; i < groups.length; i++) {
    let el = groups[i];
    if (el !== undefined) {
      let totalAmount = el.reduce(reducer, 0);
      objSummary.push({
        x: i,
        y: totalAmount,
      });
    }
  }

  return objSummary;
}
