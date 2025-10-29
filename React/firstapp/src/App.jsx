// import Button from "./components/Button";
import { useState } from "react";
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

export function MyEvents() {
  const callFunct = (event) => {
    console.log("chal gaya", event.type);
  };

  return <button onMouseOver={(event) => callFunct(event)}>Click me</button>;
}

// Form with state

// export function MyAge(){

// return (
// <>
//   <h1>My Age is {age}</h1>
//   {/* <button onClick={()=>}>Click</button> */}
// </>
// )
// }

// export function MyData() {
//   function handleChange(event) {
//     console.log(event.target.value);
//   }
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="enter your name"
//         onChange={handleChange}
//       />
//     </>
//   );
// }

// use state
// example 1
// export function MyAge() {
//   const [age, setAge] = useState(20);
//   // age is a variable and setAge is a function

// function updateAge(){
//   setAge(age+1);
// }
//   return (
//     <>
//       <h1>My age is {age}</h1>

//       <button onClick={updateAge}>Change my Age</button>
//     </>
//   );
// }

// example 2
// example 2
// export function MyColor() {
//   const [color, setColor] = useState("yellow");

//   // function updateColor() {
//   //   setColor("blue");
//   // }
//   return (
//     <>
//       <h1>My Favourite color is {color}</h1>
//       <button onClick={()=>setColor("blue")}>Change color</button>
//       <button onClick={()=>setColor("pink")}>Change color</button>
//       <button onClick={()=>setColor("green")}>Change color</button>
//     </>
//   );
// }

// example 3 with object

// export function StudentData(){

// const [data, setData] = useState({
//   name:"ali",
//   age:20,
//   roll:226655
// })

// function updateData(data){
//   setData({...data,age:30}) //...data is a spread operator 
// }

// return (
//   <>
//   <h1>My name is {data.name}</h1>
//   <h2>My Age is {data.age}</h2>
//   <h3>my Roll no is {data.roll}</h3>
//   <button onClick={updateData}>update data</button>
//   </>
// )

// }

// form

export function MyForm(){

const [name,setName]= useState("ali")
  function textChange(e){
    setName(e.target.value)
    console.log(name)
  }

function handleSubmit(event){
  event.preventDefault()
  console.log(event.target[0].value)
}
return (
  <>
  <h1>My form</h1>
  <form onSubmit={handleSubmit}>
  <input type="text" placeholder="enter your name"
  onChange={textChange}
  value={name}
  />
  <input type="submit" />
  </form>


{/* create a select with usestate */}
<select>
  <option value="karachi">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>


  </>
)
}

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
      {/* <Bike bikeInfo={bikeInfo} /> */}

      {/* Events */}
      {/* <MyEvents/> */}

      {/* Forms */}

      {/* html value="ali" */}
      {/* React value from state (use Reack hook (usestate)*/}

      {/* <MyData/> */}
      {/* <MyAge /> */}
      {/* <MyColor /> */}
      {/* <StudentData/> */}
      <MyForm/>
    </div>
  );
}

export default App;
