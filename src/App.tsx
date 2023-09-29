import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    //fetch data from database

    // (response) => response.json(); -> asynchronous code
    // (data) => data; -> asynchronous code

    //connecting with the database
    const promiseOne = fetch("https://api.thecatapi.com/v1/images/search");
    const promiseTwo = promiseOne.then((response) => response.json());
    promiseTwo.then((data) => {
      //data is received here and our application doesn't know about it
      setCatData(data); //here we are changing the data
      setIsLoading(false);
    });
  }, []); //[]-> this here means useEffect hook can only run once at the end. even if the component is renders/re-renders
  return isLoading ? (
    <div>Getting cat data</div>
  ) : (
    catData.map((cat) => <img key={cat.id} src={cat.url} />)
  );
}
export default App;
