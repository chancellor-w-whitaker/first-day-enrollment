import ReactDOM from "react-dom/client";
import React from "react";

import { Wrapper } from "./components/Wrapper";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Wrapper heading="New Freshmen: First Day Enrollment vs Officially Reported">
      <App />
    </Wrapper>
  </React.StrictMode>
);
