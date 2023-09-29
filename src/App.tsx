//api url ->https://restcountries.com/v3.1/all
//fetch() gives us output and also takes input and gives us promise
//promise is an object which holds the result of async operation
// ways to handle promise
//1. using then method (anything inside then is async and will execute at end)
//2. async await

const apiURL = "https://restcountries.com/v3.1/all";
const result = fetch(apiURL);

console.log("Before handling promise"); //1 st run
result
  .then((response) => {
    console.log("Inside first then"); //4th run
    return response.json();
  })
  .then((data) => {
    console.log("Inside second then"); //5th run
  });

//Block code: weather call stack blocked or not
for (let i = 0; i < 100; i++) {
  console.log("Running loop"); // 2nd run
}
console.log("After handling promise"); //3rd run

//refined above line 12 to 17 in line 21
//result.then((response) => response.json().then((data) => console.log(data)));

function App() {
  return <div>App</div>;
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
