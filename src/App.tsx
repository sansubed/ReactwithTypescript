import React, { useEffect, useState } from "react";

const apiUrl = "https://api.thecatapi.com/v1/images/search";
function App() {
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    async function getCatData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCatData(data);
      } catch (e) {
        console.log("Error encountered: ", e);
      }
    }
    getCatData();
  }, []);

  return catData[0] ? (
    <div>{<img src={catData[0].url} width="500px" />}</div>
  ) : (
    <p>No Cat found</p>
  );
}

export default App;
