import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App
      title="Lorem ipsum dolor sit amet"
      desc="Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."
    />
  </StrictMode>,
  rootElement
);
