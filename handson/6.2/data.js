async function loadData() {
  let response = await axios.get(
    "https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/meteors.json"
  );

  return response.data;
}

async function loadData2() {
  let response2 = await axios.get(
    "https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/sightings.json"
  );
  return response2.data;
}
