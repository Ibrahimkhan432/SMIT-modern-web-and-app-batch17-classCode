// import Button from "./components/Button";
import Bike from "./components/Bike";

//    -- props ---
// internal component
export function MyFunction() {
  const arr = ["ali", "bilal"];

  const obj = {
    name: "ali",
    age: 20,
  };

  return (
    <>
      <h1>this is a function component {arr[1]}</h1>
      <h1>my name is {obj.name}</h1>
      <h1>my age is {obj.age}</h1>
    </>
  );
}

// ---Events---

export function MyEvents(){

const callFunct =(event) =>{
console.log("chal gaya",event.type)
}

  return (
    <button onMouseOver={(event)=>callFunct(event)}>Click me</button>
  )
}

// Form with state

// export function MyAge(){
// return (
// <>
//   <h1>My Age is {age}</h1>
//   <button onClick={()=>}>Click</button>
// </>
// )


// }


function App() {
  const bikeInfo = {
    speed: "20sp",
    price: 23000,
    weight: "20kg",
  };
  return (
    <div>
      <h1>App</h1>
      {/* <p>This is a paragraph</p> */}
      {/* <MyFunction/> */}
      {/* externalcomp */}
      {/* <Button/> */}

      {/* <Bike
 color="red"
 model="2025"
bikeInfo={bikeInfo}
 /> */}
      <Bike bikeInfo={bikeInfo} />

{/* Events */}
<MyEvents/>

{/* Forms */}

{/* html value="ali" */}
{/* React value from state (use Reack hook (usestate)*/}





    </div>
  );
}

export default App;
