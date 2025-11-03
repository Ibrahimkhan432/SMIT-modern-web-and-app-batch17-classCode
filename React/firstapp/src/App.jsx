// // import Button from "./components/Button";
// import { useState } from "react";
// import Bike from "./components/Bike";

import { useEffect, useState, useContext, createContext } from "react";
import RouterPage from "./router/RouterPage";

// //    -- props ---
// // internal component
// export function MyFunction() {
//   const arr = ["ali", "bilal"];

//   const obj = {
//     name: "ali",
//     age: 20,
//   };

//   return (
//     <>
//       <h1>this is a function component {arr[1]}</h1>
//       <h1>my name is {obj.name}</h1>
//       <h1>my age is {obj.age}</h1>
//     </>
//   );
// }

// // ---Events---

// export function MyEvents() {
//   const callFunct = (event) => {
//     console.log("chal gaya", event.type);
//   };

//   return <button onMouseOver={(event) => callFunct(event)}>Click me</button>;
// }

// // Form with state

// // export function MyAge(){

// // return (
// // <>
// //   <h1>My Age is {age}</h1>
// //   {/* <button onClick={()=>}>Click</button> */}
// // </>
// // )
// // }

// // export function MyData() {
// //   function handleChange(event) {
// //     console.log(event.target.value);
// //   }
// //   return (
// //     <>
// //       <input
// //         type="text"
// //         placeholder="enter your name"
// //         onChange={handleChange}
// //       />
// //     </>
// //   );
// // }

// // use state
// // example 1
// // export function MyAge() {
// //   const [age, setAge] = useState(20);
// //   // age is a variable and setAge is a function

// // function updateAge(){
// //   setAge(age+1);
// // }
// //   return (
// //     <>
// //       <h1>My age is {age}</h1>

// //       <button onClick={updateAge}>Change my Age</button>
// //     </>
// //   );
// // }

// // example 2
// // example 2
// // export function MyColor() {
// //   const [color, setColor] = useState("yellow");

// //   // function updateColor() {
// //   //   setColor("blue");
// //   // }
// //   return (
// //     <>
// //       <h1>My Favourite color is {color}</h1>
// //       <button onClick={()=>setColor("blue")}>Change color</button>
// //       <button onClick={()=>setColor("pink")}>Change color</button>
// //       <button onClick={()=>setColor("green")}>Change color</button>
// //     </>
// //   );
// // }

// // example 3 with object

// // export function StudentData(){

// // const [data, setData] = useState({
// //   name:"ali",
// //   age:20,
// //   roll:226655
// // })

// // function updateData(data){
// //   setData({...data,age:30}) //...data is a spread operator
// // }

// // return (
// //   <>
// //   <h1>My name is {data.name}</h1>
// //   <h2>My Age is {data.age}</h2>
// //   <h3>my Roll no is {data.roll}</h3>
// //   <button onClick={updateData}>update data</button>
// //   </>
// // )

// // }

// // form

// export function MyForm(){

// const [name,setName]= useState("ali")
//   function textChange(e){
//     setName(e.target.value)
//     console.log(name)
//   }

// function handleSubmit(event){
//   event.preventDefault()
//   console.log(event.target[0].value)
// }
// return (
//   <>
//   <h1>My form</h1>
//   <form onSubmit={handleSubmit}>
//   <input type="text" placeholder="enter your name"
//   onChange={textChange}
//   value={name}
//   />
//   <input type="submit" />
//   </form>

// {/* create a select with usestate */}
// <select>
//   <option value="karachi">1</option>
//   <option value="2">2</option>
//   <option value="3">3</option>
// </select>

//   </>
// )
// }

// function App() {
//   const bikeInfo = {
//     speed: "20sp",
//     price: 23000,
//     weight: "20kg",
//   };
//   return (
//     <div>
//       <h1>App</h1>
//       {/* <p>This is a paragraph</p> */}
//       {/* <MyFunction/> */}
//       {/* externalcomp */}
//       {/* <Button/> */}

//       {/* <Bike
//  color="red"
//  model="2025"
// bikeInfo={bikeInfo}
//  /> */}
//       {/* <Bike bikeInfo={bikeInfo} /> */}

//       {/* Events */}
//       {/* <MyEvents/> */}

//       {/* Forms */}

//       {/* html value="ali" */}
//       {/* React value from state (use Reack hook (usestate)*/}

//       {/* <MyData/> */}
//       {/* <MyAge /> */}
//       {/* <MyColor /> */}
//       {/* <StudentData/> */}
//       <MyForm/>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [name, setName] = useState("ali");
//   const [age, setAge] = useState(20);
//   const [roll, setRoll] = useState(100);

// useEffect(()=>{
//   console.log("useEffect empty")
// },)

// useEffect(()=>{
//   console.log("useEffect with dependency array")
// },[])

// useEffect(()=>{
//   console.log("useEffect with variable change")
// },[age,name])

//   return (
//     <>
//       <h1>hello</h1>
//       <h1>NAME IS {name}</h1>
//       <button onClick={() => setName("ahmed")}> Update name</button>
//       <h1>AGE IS {age}</h1>
//       <button onClick={() => setAge(age+1)}> Update age</button>
//       <h1>ROLL IS {roll}</h1>
//       <button onClick={() => setRoll(300)}> Update roll</button>
//     </>
//   );
// }
// export default App;

// ---props drilling---
// export function FirstComponent() {
//   const [uname, setUname] = useState("ali");
//   return (
//     <>
//       <h1>first component</h1>
//       <h1>name is {uname}</h1>
//       <SecondComponent uname={uname} />
//     </>
//   );
// }
// export function SecondComponent({ uname }) {
//   return (
//     <>
//       <h1>second component</h1>
//       <h1>second component name is {uname}</h1>
//       <ThirdComponent uname={uname} />
//     </>
//   );
// }
// export function ThirdComponent({ uname }) {
//   return (
//     <>
//       <h1>third component</h1>
//       <h1>third component name is {uname}</h1>
//     </>
//   );
// }

// // props drilling
// function App() {
//   return (
//     <>
//       {/* <h1>app chal gaya</h1> */}
//       <FirstComponent />
//       {/* <SecondComponent /> */}
//     </>
//   );
// }
// export default App;

//  ---use context----

// const userContext = createContext();
//  function FirstComponent() {
//    const [uname,setUname] = useState("ali")

//   return (
//     <>
//       <userContext.Provider value={uname}>
//       <SecondComponent />
//     </userContext.Provider>
//     </>
//   );
// }
//  function SecondComponent() {
//   return (
//     <>
//       <h1>second component</h1>
//       <ThirdComponent />
//     </>
//   );
// }
//  function ThirdComponent() {
//   const  user  = useContext(userContext);
//   return (
//     <>
//       <h1>third component</h1>
//       <h1>{`Hello ${user} again!`}</h1>
//     </>
//   );
// }

export function App() {
  return (
    <>
    <RouterPage/>
    </>
  );
}

export default App;
