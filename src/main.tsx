import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "./store";
import locales from "./locales";
import AppRouter from "./router";

i18n.use(initReactI18next).init(locales)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
