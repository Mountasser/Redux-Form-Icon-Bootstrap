import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import SimpleForm from "./LogoForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <SimpleForm />
    </div>
  </Provider>,
  rootEl
);
