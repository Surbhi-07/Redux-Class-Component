import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import store from "./store";

import { Provider } from "react-redux";



console.log("Connected to store: ", store.getState());

// // reducer is called with new action
// store.dispatch({ type: "INCREMENT" });
// console.log("Connected to store: ", store.getState());

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// console.log("Connected to store: ", store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
