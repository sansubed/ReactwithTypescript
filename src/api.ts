async function getCatData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setCatData(data);
  } catch (e) {
    console.log("Error encountered: ", e);
  }
}
