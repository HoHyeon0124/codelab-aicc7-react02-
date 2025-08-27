import { StrictMode } from 'react'
import { CreateRoot } from "react-dom/client";
import App from "./App"

const root = CreateRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);