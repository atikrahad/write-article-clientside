import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Router from "./Router/Router.jsx";
import Authprovider from "./Shared-Component/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <Router></Router>
    </Authprovider>
  </React.StrictMode>
);
