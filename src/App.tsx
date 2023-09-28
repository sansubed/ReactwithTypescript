import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("1. App component rendering started.");
  //useState(); // has both input and output

  //Use effect
  //provide input and no output -> input is the callback function but we only call here
  // and the other input can be the array []-> dependency array

  const callbackFn = () => {
    console.log("2. Running from the useEffect hook");
  };

  //asynchronous code always at the end -> asynchronous
  // setTimeout(() => {
  //   setCount((prevState) => {
  //     return prevState + 1;
  //   });
  // }, 5000);

  // useEffect hook will run out at the end of the component rendering or (re-rendering) process.
  useEffect(callbackFn);
  console.log("3. Running below useEffect hook call");
  return (
    <>
      {console.log("4. Running inside jsx")}
      <div>Hello</div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // setCount is the call back function
          setCount((prevState) => prevState + 1);
        }}
      >
        Update Number
      </button>
    </>
  );
}

export default App;

// when you print it: 1,3,4,2

//function -> no input , output provide
//function without return will give undefined
/*
function add() {
  const a = 10;
  const b = 20;
  return a + b;
}
*/

//input , output -> yes
/*
function add(a:number,b: number): number -> this is for output
{
  return a+b
}
*/

//no input, no output
/*
function add()
{
  const a =10;
  const b =20;

  console.log(a,b)
}
*/

//input , no output
/*
function add(a: number,b:number)
{
console.log(a,b)
}
*/
