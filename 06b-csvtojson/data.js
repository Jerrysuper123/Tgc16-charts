async function loadData() {
  // get csv file thru axios
  const response = await axios.get("data.csv");
  // convert raw csv into json object
  //csv function is awailable from the csv to json cdn
  const json = await csv().fromString(response.data);
  console.log(json);
  return json;
}

// // my code is not working below
//[{x: 1920, y: live births}]
function transformData(rawData) {
  //brute force way
  let transformedData = [];

  for (let data of rawData) {
    if (data.ethnic_group.trim().toLowerCase() === "others") {
      transformedData.push({
        x: Number(data.year),
        y: Number(data.live_births),
      });
    }
  }
  // console.log(transformedData);
  return transformedData;
}
