// el inicio de la app
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/Main/Main";


//Config MDB
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../back/src/public/styles/app.css";
import "../../back/src/public/styles/smartphone.css";
import "../../back/src/public/styles/Carousel.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

