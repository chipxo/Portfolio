import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import { searchRobots } from "./reducers";
import "tachyons";

const store = createStore(searchRobots);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

reportWebVitals();
