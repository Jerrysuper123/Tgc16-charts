async function loadData() {
  let response = await axios.get(
    "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/bigger-sales.json"
  );

  return response.data;
}

function transformData(rawData, country, year) {
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

  let filterByYear = function (year) {
    let dateObject = new Date(record.completed_at);

    if (!year) {
      return true;
    }

    //alternative includes
    let chunks = dateObject.split("-");
    if (year == parseInt(chunks[0])) {
      return true;
    }

    //2. if (record.completed_at.includes(year)) return true;
  };
  let filtered = rawData.filter(filterFunc);
  let filteredByYear = filtered.filter(filterByYear);

  return filteredByYear;
}
