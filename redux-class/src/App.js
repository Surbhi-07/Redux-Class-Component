import React from "react";
import "./Style.css";
import Counter from "./Counter";

import {createStore} from "redux" 

const initialState ={
  count : 0
}

function reducer (state = initialState , action){
  console.log('reducer work!!')
  switch(action.type){
    case "INCREMENT":
      return{
        count: state.count+1
      }
      case "DECREMENT":
        return{
          count: state.count-1 
        }
        default:
          return state
  }
  return state;
}

const store = createStore(reducer)
console.log("connected to store:",store.getState());

//reducer is called with new action
store.dispatch ({type: "INCREMENT"})
store.dispatch ({type: "DECREMENT"})

console.log("connected to store:",store.getState());
store.dispatch ({type: "INCREMENT"})
console.log("connected to store:",store.getState());

store.dispatch ({type: "DECREMENT"})
console.log("connected to store:",store.getState());




export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}