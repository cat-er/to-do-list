import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "@ant-design/v5-patch-for-react-19";

import store from "./store";
import { Provider } from "react-redux";

import "./assets/style/index.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
