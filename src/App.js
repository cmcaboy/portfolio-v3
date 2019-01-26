import React, { Component } from "react";
// import "./App.css";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
//import 'semantic-ui-css/semantic.min.css';
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Barlow:100,200,300,400,600,800", "sans-serif"]
  }
});

class App extends Component {
  render() {
    return <AppRouter />;
  }
}

export default App;
