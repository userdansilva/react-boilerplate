import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export { App };
