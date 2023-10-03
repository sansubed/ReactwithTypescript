import React, { useEffect, useState } from "react";
const apiUrl = "https://api.thecatapi.com/v1/images/search";

function App() {
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    async function getCatData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
        //setCatData(data);
      } catch (e) {
        //console.log("Error encountered: ", e);
        throw Error("Enter your message here");
      }
    }
    getCatData();
  }, []);

  return catData[0] ? (
    <img src={catData[0].url} width="500px" /> //no need outer div and {}
  ) : (
    <p>No Cat found</p>
  );
}

export default App;
