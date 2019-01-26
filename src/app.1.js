import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
//import 'semantic-ui-css/semantic.min.css';
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Barlow:100,200,300,400,600,800", "sans-serif"]
  }
});

const jsx = <AppRouter />;

ReactDOM.render(jsx, document.getElementById("app"));
