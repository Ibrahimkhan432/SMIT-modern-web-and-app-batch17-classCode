import { useReducer, useState } from "react";
import { useParams } from "react-router-dom";

const initialValue = {
  count: 0,
  count2: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "increment2":
      return { ...state, count2: state.count2 + 5 };
    case "decrement2":
      return { ...state, count2: state.count2 - 5 };
    case "reset":
      return initialValue;
  }
};
function Counter() {


const {myName} = useParams()

  //   const btnStyle = {
  //     textAlign: "center",
  //     width: "600px",
  //     border: "2px solid red",
  //     margin: "100px auto",
  //   };
  //   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>Counter hello {myName}</h1>
      <h1>{count.count}</h1>
      <h1>{count.count2}</h1>
      <button
        //    style={btnStyle}
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        //   style={btnStyle}
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        //    style={btnStyle}
        onClick={() => dispatch({ type: "increment2" })}
      >
        Increment count 2
      </button>
      <button
        //   style={btnStyle}
        onClick={() => dispatch({ type: "decrement2" })}
      >
        Decrement count 2
      </button>
      <button
        //    style={btnStyle}
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </button>
    </div>
  );
}
export default Counter;
