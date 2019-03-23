import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import SimpleForm from "./SimpleForm";
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
