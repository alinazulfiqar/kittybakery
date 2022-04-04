import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducers/cart.js";
import rootReducer from "./reducers/index";
import ScrollToTop from "./components/scrollToTop";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
