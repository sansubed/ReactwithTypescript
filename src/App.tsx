//api url ->https://restcountries.com/v3.1/all
//fetch() gives us output and also takes input and gives us promise
//promise is an object which holds the result of async operation
// ways to handle promise
//1. using then method (anything inside then is async and will execute at end)
//2. async await

import { useEffect, useState } from "react";

const apiURL = "https://restcountries.com/v3.1/all";
//const result = fetch(apiURL);

/*
console.log("Before handling promise"); //1 st run
result
  .then((response) => {
    console.log("Inside first then"); //4th run
    return response.json();
  })
  .then((data) => {
    console.log("Inside second then"); //5th run
  })
  .catch((error) => {
    console.log("You got an error", error);
  });
*/
//Block code: weather call stack blocked or not
/*
for (let i = 0; i < 100; i++) {
  console.log("Running loop"); // 2nd run
}
console.log("After handling promise"); //3rd run
*/

function App() {
  const [countries, setCountries] = useState([]);
  console.log(countries);
  //refined above line 12 to 22 in line 21
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <img src={country.flags.png} />
          {country.name.common} {country.flag}
        </div>
      ))}
    </div>
  );
}
export default App;

/*
const obj = {
  anything: () => {
    console.log("I am anything function");
  },
};
obj.anything();
*/

/*
const numbers = [1, 2, 3, 4];
const newNumbers = numbers.map((num) => {
  console.log(num * 10);
});
*/
